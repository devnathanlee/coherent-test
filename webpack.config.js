'use strict'
require('@babel/polyfill')
const path = require('path')

const PUBLIC_JS_DIR = path.resolve(__dirname, 'public/js/')

module.exports = {
    entry: {
        app: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')]
    },
    output: {
        path: PUBLIC_JS_DIR,
        filename: 'app.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
