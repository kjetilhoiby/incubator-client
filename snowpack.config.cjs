import httpProxy from "http-proxy";
const proxy = httpProxy.createServer({ target: "http://localhost:30031" });
const env = process.env.NODE_ENV;

export default {
  mount: {
    "src/client": 
    env == 'development' 
    ? "/incubator/dist/src/client" 
    : "/src/client",
    public: "/incubator/"
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
    openUrl: '/incubator/client',
  },
  buildOptions: {
    out: 'dist',
    baseUrl: '/incubator/dist',
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
      src: "/incubator/client",
      dest: (req, res) => { 
        proxy.web(req, res);
      },
    },
    {
      src: "/incubator/status",
      dest: (req, res) => {
        proxy.web(req, res);
      },
    }
  ],
};
