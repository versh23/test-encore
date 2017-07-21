let Encore = require('@symfony/webpack-encore');
let webpack = require('webpack');
Encore
// directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // what's the public path to this directory (relative to your project's document root dir)
    .setPublicPath('/build')

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()


    .addStyleEntry('bad', [
        './app.scss'
    ])
    .addStyleEntry('good', [
        './style.css'
    ])

    .enableSassLoader()

    .enableVersioning()
    .enablePostCssLoader()
;

// export the final configuration
module.exports = Encore.getWebpackConfig();