import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const packageRoot = join( root, 'dist-zip', 'wp-swiper' );
const configuredPath = process.env.WP_SWIPER_SVN_PATH;

if ( ! configuredPath ) {
	throw new Error(
		'Set WP_SWIPER_SVN_PATH to the WordPress.org SVN trunk directory.'
	);
}

const svnTrunk = resolve( configuredPath );

if ( basename( svnTrunk ) !== 'trunk' ) {
	throw new Error(
		'WP_SWIPER_SVN_PATH must point to a directory named `trunk`.'
	);
}

if ( ! existsSync( svnTrunk ) ) {
	throw new Error( `WordPress.org SVN trunk does not exist: ${ svnTrunk }` );
}

if ( ! existsSync( packageRoot ) ) {
	throw new Error(
		'The distribution directory is missing. Run `npm run package` first.'
	);
}

for ( const entry of readdirSync( svnTrunk ) ) {
	if ( entry !== '.svn' ) {
		rmSync( join( svnTrunk, entry ), { force: true, recursive: true } );
	}
}

for ( const entry of readdirSync( packageRoot ) ) {
	cpSync( join( packageRoot, entry ), join( svnTrunk, entry ), {
		recursive: true,
	} );
}

process.stdout.write( `Copied the verified release files to ${ svnTrunk }\n` );
