const path = require( 'node:path' );
const { defineConfig } = require( '@playwright/test' );

const targets = {
	'6.3.8': {
		baseURL: 'http://localhost:8890',
		config: 'tests/e2e/wp-env/wordpress-6.3.json',
	},
	'7.0.2': {
		baseURL: 'http://localhost:8892',
		config: 'tests/e2e/wp-env/wordpress-7.0.json',
	},
};
const version = process.env.WP_VERSION || '7.0.2';
const target = targets[ version ];

if ( ! target ) {
	throw new Error(
		`Unsupported WP_VERSION "${ version }". Expected one of: ${ Object.keys(
			targets
		).join( ', ' ) }.`
	);
}

process.env.WP_BASE_URL = target.baseURL;
process.env.WP_ARTIFACTS_PATH = path.join(
	process.cwd(),
	'artifacts',
	`wordpress-${ version }`
);
process.env.STORAGE_STATE_PATH = path.join(
	process.env.WP_ARTIFACTS_PATH,
	'storage-states',
	'admin.json'
);

const baseConfig = require( '@wordpress/scripts/config/playwright.config.js' );

module.exports = defineConfig( {
	...baseConfig,
	metadata: {
		wordpressVersion: version,
	},
	testDir: './tests/e2e/specs',
	outputDir: path.join( process.env.WP_ARTIFACTS_PATH, 'test-results' ),
	use: {
		...baseConfig.use,
		baseURL: target.baseURL,
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: process.env.CI ? 'on-first-retry' : 'off',
	},
	webServer: {
		command: `npm run wp-env -- start --config=${ target.config }`,
		url: target.baseURL,
		timeout: 180_000,
		reuseExistingServer: ! process.env.CI,
	},
} );
