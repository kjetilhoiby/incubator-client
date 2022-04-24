const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({ target: "http://localhost:30031" });
const env = process.env.NODE_ENV;

module.exports = {
  mount: {
    "src/client": env == 'development' ? "/incubator-client/dist/src/client" : "/src/client",
    public: "/incubator-client/"
  },
  plugins: [
    ["@snowpack/plugin-svelte", {
      compilerOptions: {
        css: true
      }
    }]
  ],
  devOptions: {
    port: 9000,
    output: "stream",
    openUrl: '/incubator-client/',
  },
  buildOptions: {
    out: 'dist',
    baseUrl: '/incubator-client/dist',
    metaUrlPath: 'snowy-deps'
  },
  optimize: {
    entrypoints:['./src/client/index.js'],
    treeshake: true,
    minify: true,
    sourcemap: false,
    target: "es2017",
  },
  exclude: ["**/*.md"],
  routes: [
    {
      src: "/incubator-client/client",
      dest: (req, res) => { 
        proxy.web(req, res);
      },
    },
    {
      src: "/incubator-client/status",
      dest: (req, res) => {
        proxy.web(req, res);
      },
    }
  ],
};
