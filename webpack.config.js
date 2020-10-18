const externals = {
    wp: 'wp',
    react: 'React',
    'react-dom': 'ReactDOM',
};

const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/gutenberg/js/admin_block.dev.js',
    output: {
        path: __dirname,
        filename: './src/gutenberg/js/admin_block.js',
    },
    plugins: [
        new MiniCSSExtractPlugin(
            {
                path: __dirname,
                filename: "./src/css/admin_block.css"
            }
        )
    ],
    externals,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [ 
                            "@babel/preset-env", 
                            [
                                "@babel/preset-react",
                                {
                                    "pragma": "wp.element.createElement",
                                    "pragmaFrag": "wp.element.Fragment"
                                }
                            ]
                        ],
                    }
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCSSExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
        ],
    },
};