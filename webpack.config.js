const externals = {
	wp: 'wp',
	react: 'React',
	'react-dom': 'ReactDOM',
	'@wordpress/blocks': ['wp', 'blocks'],
	'@wordpress/i18n': ['wp', 'i18n'],
	'@wordpress/element': ['wp', 'element'],
	'@wordpress/data': ['wp', 'data'],
	'@wordpress/components': ['wp', 'components'],
	'@wordpress/block-editor': ['wp', 'blockEditor'],
	'@wordpress/blocks': ['wp', 'blocks'],
	'@wordpress/compose': ['wp', 'compose'],
	'@wordpress/keycodes': ['wp', 'keycodes'],
};

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		admin_block: './src/gutenberg/js/admin_block.dev.js',
		frontend_block: './src/gutenberg/js/frontend_block.dev.js',
	},
	output: {
		path: __dirname,
		filename: './src/gutenberg/js/[name].js',
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: './src/css/[name].css',
			chunkFilename: './src/css/[id].css',
		}),
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
						presets: [
							'@babel/preset-env',
							[
								'@babel/preset-react',
								{
									pragma: 'wp.element.createElement',
									pragmaFrag: 'wp.element.Fragment',
								},
							],
						],
						plugins: [['@babel/plugin-proposal-class-properties']],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						// Creates `style` nodes from JS strings
						loader: MiniCSSExtractPlugin.loader,
					},
					// Translates CSS into CommonJS
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('autoprefixer')],
							},
						},
					},
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
};
