/* eslint-disable no-console -- This command reports subprocess progress and errors. */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';

const require = createRequire( import.meta.url );
const wpScriptsPath = require.resolve( '@wordpress/scripts/bin/wp-scripts.js' );
const supportedVersions = [ '6.3.8', '7.0.2' ];
const requestedVersion = process.argv[ 2 ] || '7.0.2';
const playwrightArgs = process.argv.slice( 3 );
const versions =
	requestedVersion === 'all' ? supportedVersions : [ requestedVersion ];
const packageEntryPoint = path.join(
	process.cwd(),
	'dist-zip',
	'wp-swiper',
	'wp-swiper.php'
);

if ( ! existsSync( packageEntryPoint ) ) {
	console.error(
		'Packaged plugin contents are missing. Run `npm run package` first.'
	);
	process.exit( 1 );
}

for ( const version of versions ) {
	if ( ! supportedVersions.includes( version ) ) {
		console.error(
			`Unsupported WordPress version "${ version }". Expected ${ supportedVersions.join(
				', '
			) }, or all.`
		);
		process.exit( 1 );
	}

	console.log(
		`Running WP Swiper browser smoke tests on WordPress ${ version }.`
	);

	const result = spawnSync(
		process.execPath,
		[ wpScriptsPath, 'test-playwright', ...playwrightArgs ],
		{
			cwd: process.cwd(),
			env: {
				...process.env,
				PLAYWRIGHT_BROWSERS_PATH:
					process.env.PLAYWRIGHT_BROWSERS_PATH ||
					path.join( os.tmpdir(), 'wp-swiper-playwright' ),
				WP_ENV_HOME:
					process.env.WP_ENV_HOME ||
					path.join( os.tmpdir(), 'wp-swiper-wp-env' ),
				WP_VERSION: version,
			},
			stdio: 'inherit',
		}
	);

	if ( result.error ) {
		console.error( result.error.message );
		process.exit( 1 );
	}

	if ( result.status !== 0 ) {
		process.exit( result.status ?? 1 );
	}
}
