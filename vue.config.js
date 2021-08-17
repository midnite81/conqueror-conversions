module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Activity Conversion Calculator";
                return args;
            })
    }
}
