"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[8670],{79951:(e,t,n)=>{n.r(t),n.d(t,{initSentry:()=>l,sentryRouter:()=>f});var r=n(7560),i=n(26663),o=n.n(i),a=n(70381);function s(e){var t;if(null!=e&&null!=(t=e.exception)&&t.values)for(const t of e.exception.values){var n;if(null!=t&&null!=(n=t.stacktrace)&&n.frames)for(const e of t.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function l(e){o().SENTRY_DSN&&a.init((0,r.Z)({},e,{dsn:o().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-07-31.09-23",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:s}))}var u=n(40540),c=n(60607);const f=e=>{if(o().SENTRY_DSN){var t;const n=null==(t=a.getCurrentHub())?void 0:t.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new a.BrowserTracing({routingInstrumentation:a.reactRouterV6Instrumentation(u.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),a.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=8670.6decca5f3207c084.js.map