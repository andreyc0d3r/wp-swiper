import AdmZip from 'adm-zip';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const sourceArchive = join( root, 'wp-swiper.zip' );
const distributionDirectory = join( root, 'dist-zip' );
const distributionArchive = join( distributionDirectory, 'wp-swiper.zip' );
const packageDirectory = join( distributionDirectory, 'wp-swiper' );

if ( ! existsSync( sourceArchive ) ) {
	throw new Error(
		'The plugin archive was not created by `wp-scripts plugin-zip`.'
	);
}

mkdirSync( distributionDirectory, { recursive: true } );
mkdirSync( packageDirectory, { recursive: true } );

// Preserve the package directory itself because wp-env may have it mounted.
for ( const entry of readdirSync( distributionDirectory ) ) {
	const entryPath = join( distributionDirectory, entry );

	if ( entryPath === packageDirectory ) {
		for ( const packageEntry of readdirSync( packageDirectory ) ) {
			rmSync( join( packageDirectory, packageEntry ), {
				force: true,
				recursive: true,
			} );
		}
	} else {
		rmSync( entryPath, { force: true, recursive: true } );
	}
}

const archive = new AdmZip( sourceArchive );

// npm-packlist always adds these repository files. They are not needed at runtime.
archive.deleteFile( 'wp-swiper/package.json' );
archive.deleteFile( 'wp-swiper/README.md' );
archive.writeZip( distributionArchive );
archive.extractAllTo( distributionDirectory, true );

rmSync( sourceArchive );

process.stdout.write( `Prepared ${ distributionArchive }\n` );
