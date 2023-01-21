const mix = require("laravel-mix");
const sassGlobImporter = require("node-sass-glob-importer");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const notifier = require("node-notifier");
const { config } = require("./webpack.mix.config");
const CopyPlugin = require("copy-webpack-plugin");

require("laravel-mix-assets-splitter");
require("laravel-mix-php-manifest");
require("laravel-mix-stylelint");
require("laravel-mix-eslint");

const sassConfig = {
  sassOptions: {
    importer: sassGlobImporter(),
  },
};

mix
  .setPublicPath(config.publicPath)
  .js(config.resourcesPath + "/js/app.js", config.publicPath + "/js")
  .sass(
    config.resourcesPath + "/scss/app.scss",
    config.publicPath + "/css",
    sassConfig
  )
  .browserSync({
    proxy: config.devUrl,
    watchEvents: ["add", "change", "unlink", "addDir", "unlinkDir"],
    files: [
      "public/**/*.css",
      "public/**/*.js",
      "functions.php",    ],
  })
  .options({
    processCssUrls: false,
    runtimeChunkPath: "js",
  })
  .stylelint({
    configFile: ".stylelintrc",
    context: ".",
    files: "**/*.scss",
    failOnWarning: true,
    failOnError: true,
  })
  .eslint({
    extensions: ["js"],
    failOnWarning: true,
    failOnError: true,
  })
  .phpManifest()
  .disableNotifications()
  .webpackConfig({
    mode: "development",
    stats: false,
    optimization: {
      emitOnErrors: false,
    },
    plugins: [
      new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [],
          notes: [],
        },
        onErrors: function (severity, errors) {
          if (severity !== "error") {
            return;
          }
          const error = errors[0];
          notifier.notify({
            message: "Check your terminal for details",
            title: severity + " : " + error.name,
          });
        },
        clearConsole: true,
        additionalFormatters: [],
        additionalTransformers: [],
      }),
      new CopyPlugin({
        patterns: [
          {
            from: config.resourcesPath + "/fonts",
            to: "fonts",
            noErrorOnMissing: true,
          },
          {
            from: config.resourcesPath + "/img",
            to: "img",
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
  });

config.extractLibs.forEach((lib) => {
  mix.extract([lib], "/js/vendor/" + lib);
});

//production pipes
if (mix.inProduction()) {
  mix.version().sourceMaps();
}
