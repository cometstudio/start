module.exports = {
    devServer: {
        proxy: 'http://smartconnect.smstraffic.ru.local',
    },
    pluginOptions: {

    },
    css: {
        loaderOptions: {
            sass: {
                prependData: '' +
                '@import "@/scss/_vars.scss";' +
                '@import "@/scss/mixins";'
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule("i18n")
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use("i18n")
            .loader("@kazupon/vue-i18n-loader")
            .end();
    }
}
