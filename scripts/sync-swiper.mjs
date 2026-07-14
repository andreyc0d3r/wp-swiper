import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const packageJson = JSON.parse(
	readFileSync( join( root, 'package.json' ), 'utf8' )
);
const swiperRoot = join( root, 'node_modules', 'swiper' );
const swiperPackagePath = join( swiperRoot, 'package.json' );
const destination = join( root, 'assets', 'swiper' );

if ( ! existsSync( swiperPackagePath ) ) {
	throw new Error( 'Swiper is not installed. Run `npm ci` first.' );
}

const swiperPackage = JSON.parse( readFileSync( swiperPackagePath, 'utf8' ) );
const expectedVersion = packageJson.devDependencies.swiper;

if ( swiperPackage.version !== expectedVersion ) {
	throw new Error(
		`Swiper version mismatch: expected ${ expectedVersion }, installed ${ swiperPackage.version }.`
	);
}

mkdirSync( destination, { recursive: true } );

for ( const file of [ 'swiper-bundle.min.css', 'swiper-bundle.min.js' ] ) {
	const source = join( swiperRoot, file );

	if ( ! existsSync( source ) ) {
		throw new Error( `Swiper distribution file is missing: ${ file }` );
	}

	const content = readFileSync( source, 'utf8' ).replace(
		/\n\/\/# sourceMappingURL=.*\s*$/,
		'\n'
	);

	if ( ! content.includes( `Swiper ${ expectedVersion }` ) ) {
		throw new Error( `Swiper version header is missing from ${ file }.` );
	}

	writeFileSync( join( destination, file ), content );
}

process.stdout.write(
	`Synced Swiper ${ expectedVersion } distribution assets.\n`
);
