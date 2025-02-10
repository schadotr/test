// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
export default {
    // This tells Remix to compile the server as Node (CJS) for Vercel’s Node runtime:
    serverModuleFormat: 'cjs',
    serverPlatform: 'node',

    // (Optional) If you want to name a custom server entry file:
    // server: './server.js',

    // Whether to enable certain future Remix features:
    future: {
        v2_dev: true,
        v2_routeConvention: true,
    },
};
