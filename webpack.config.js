module.exports = {
    entry: {
        articleOverview: './src/articleOverview/bootstrap.js',
        test: './test',
    },
    output: {
        path: 'build',
        filename: '[name].js',
    },
    resolve: {
        root: [
            __dirname + '/bower_components',
            __dirname + '/node_modules',
        ],
        extensions: ['', '.js'],
        alias: {
            'sinon': 'sinon/pkg/sinon',
        },
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /bower_components|node_modules/ },
            { test: /\.js$/, loader: 'eslint-loader', exclude: /bower_components|node_modules/ },
            { test: /sinon/, loader: "imports?define=>false,require=>false" },
        ],
    },
};
