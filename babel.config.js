module.exports = ( api ) => {
	const isTest = api.env( 'test' );

	return {
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: isTest
			? []
			: [
					[
						'@babel/plugin-transform-react-jsx',
						{
							// react-jsx-runtime was added to WordPress in 6.6.
							runtime: 'classic',
							useBuiltIns: true,
						},
					],
			  ],
	};
};
