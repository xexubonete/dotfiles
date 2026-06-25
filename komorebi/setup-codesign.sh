#!/usr/bin/env bash
# Firma el binario de komorebi con un certificado autofirmado ESTABLE.
#
# Por qué: cargo produce una firma "ad-hoc" (un hash del contenido), que cambia
# en cada compilación. macOS trata cada firma distinta como una app nueva y
# revoca los permisos de Accesibilidad y Grabación de Pantalla. Resultado:
# tras cada recompilación había que volver a concederlos.
#
# Con un certificado autofirmado propio, la identidad del binario
# (designated requirement: identifier + certificate leaf) es estable entre
# compilaciones, así que los permisos se conceden UNA vez y persisten.
#
# Idempotente: crea el certificado solo si no existe, y firma el binario.
set -euo pipefail

CERT_NAME="komorebi-selfsigned"
KEYCHAIN="$HOME/Library/Keychains/login.keychain-db"
BIN="${1:-$HOME/dev/komorebi-for-mac/target/release/komorebi}"

# 1. Crear el certificado de firma si no está ya en el llavero.
if ! security find-certificate -c "$CERT_NAME" "$KEYCHAIN" >/dev/null 2>&1; then
  echo "🔐 Creando certificado de firma '$CERT_NAME'…"
  tmp="$(mktemp -d)"
  trap 'rm -rf "$tmp"' EXIT

  cat > "$tmp/cert.conf" <<'EOF'
[ req ]
distinguished_name = req_dn
x509_extensions = v3_ext
prompt = no

[ req_dn ]
CN = komorebi-selfsigned

[ v3_ext ]
keyUsage = critical, digitalSignature
extendedKeyUsage = critical, codeSigning
basicConstraints = critical, CA:false
EOF

  openssl req -x509 -newkey rsa:2048 \
    -keyout "$tmp/key.pem" -out "$tmp/cert.pem" \
    -days 3650 -nodes -config "$tmp/cert.conf" >/dev/null 2>&1

  # -legacy: macOS Security no lee el cifrado por defecto de OpenSSL 3.x.
  openssl pkcs12 -export -legacy \
    -out "$tmp/cert.p12" \
    -inkey "$tmp/key.pem" -in "$tmp/cert.pem" \
    -passout pass:komorebi -name "$CERT_NAME" >/dev/null 2>&1

  security import "$tmp/cert.p12" -k "$KEYCHAIN" \
    -P komorebi -T /usr/bin/codesign -A >/dev/null 2>&1

  echo "  ✅ Certificado creado e importado en el llavero."
else
  echo "🔐 Certificado '$CERT_NAME' ya existe en el llavero."
fi

# 2. Firmar el binario con el certificado estable.
codesign --force --sign "$CERT_NAME" --identifier komorebi "$BIN"
echo "  ✅ Binario firmado: $BIN"

# 3. Verificar.
codesign --verify --verbose "$BIN" 2>&1 | tail -1
