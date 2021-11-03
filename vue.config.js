module.exports = {
  productionSourceMap: false,
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/sass/web.scss"`,
      },
    },
  },
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Apollo Rebase Dashboard",
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  pwa: {
    name: "Apollo Rebase Dashboard",
    themeColor: "#2c2e3a",
    msTileColor: "#2c2e3a",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#2c2e3a",
    manifestOptions: {
      background_color: "#2c2e3a",
    },
  },
};
