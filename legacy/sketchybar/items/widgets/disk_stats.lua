-- Update with path to stats_provider
sbar.exec('killall stats_provider >/dev/null; $CONFIG_DIR/sketchybar-system-stats/target/release/stats_provider --cpu usage --disk usage --memory usage')
-- Subscribe and use the `DISK_USAGE` var

local disk_usage = sbar.add('item', 'disk_usage', {
	position = 'center',
    padding_right = 4,
    label = { 
        font = { 
            family = "SF Pro", 
            style = "Bold", 
            size = 10,
        },
    }
})

disk_usage:subscribe('system_stats', function(env)
    -- local disk_total = "992GB"
    -- local disk_used = math.floor(env.DISK_USED:gsub("GB", ""))

    local network_rx = env.NETWORK_RX_en0
    local network_tx = env.NETWORK_TX_en0
    local cpu_temp = env.CPU_TEMP
    local cpu_usage = env.CPU_USAGE
    local ram_used = env.RAM_USED
    
    -- .. " - " .. disk_used .. "/" .. disk_total
   local ram_used_with_max = cpu_usage .. " - " .. cpu_temp .. " - " .. ram_used .. " - " .. network_rx .. " - " .. network_tx
    disk_usage:set { label = ram_used_with_max }
end)

os.execute([[
    export CONFIG_DIR=~/.config
    ## Start the helper with desired CLI args
    killall stats_provider
    # Update with path to stats_provider and invoke cli for your desired stats
    # This example will send cpu, disk and ram usage percentages
    $CONFIG_DIR/sketchybar-system-stats/target/release/stats_provider --cpu temperature usage --memory ram_used ram_total --disk used total --network en0 --interval 1 &
    sketchybar --add item disk_usage right \
               --set disk_usage script="sketchybar --set disk_usage label=\$DISK_USAGE" \
               --subscribe disk_usage system_stats
]])