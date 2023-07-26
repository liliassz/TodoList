const path = require('path');

module.exports = {
    mode: 'development', // outras opções: production

    entry: {
        server: './src/server.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },

    devServer: {
        static: path.join(__dirname, 'public'),
        open: true // Opcional: abre automaticamente o navegador quando o servidor estiver em execução
    }
};
