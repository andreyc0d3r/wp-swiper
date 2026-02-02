/**
 * External Dependencies
 */
const path = require('path');

/**
 * WordPress Dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(process.cwd(), 'src', 'index.js'),
		frontend: path.resolve(process.cwd(), 'src', 'frontend.js'), // Path to your frontend.js file
	},
	output: {
		...defaultConfig.output,
		filename: '[name].build.js', // This will output index.build.js and frontend.build.js
	},
};
