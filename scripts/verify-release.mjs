import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const packageRoot = join( root, 'dist-zip', 'wp-swiper' );
const archivePath = join( root, 'dist-zip', 'wp-swiper.zip' );
const errors = [];

const requiredFiles = [
	'LICENSE',
	'README.txt',
	'THIRD_PARTY_NOTICES.md',
	'assets/swiper/swiper-bundle.min.css',
	'assets/swiper/swiper-bundle.min.js',
	'build/frontend.build.js',
	'build/frontend.css',
	'build/index.build.js',
	'build/index.css',
	'wp-swiper.php',
];

const forbiddenPaths = [
	'.git',
	'.github',
	'CONTRIBUTING.md',
	'CODE_OF_CONDUCT.md',
	'README.md',
	'SECURITY.md',
	'SUPPORT.md',
	'docs',
	'gulpfile.js',
	'node_modules',
	'package-lock.json',
	'package.json',
	'scripts',
	'src',
	'webpack.config.js',
];

const privatePatterns = [
	{ label: 'macOS user path', pattern: /\/Users\/[A-Za-z0-9._-]+\// },
	{ label: 'Linux user path', pattern: /\/home\/[A-Za-z0-9._-]+\// },
	{
		label: 'Windows user path',
		pattern: /[A-Za-z]:\\Users\\[A-Za-z0-9._-]+\\/,
	},
	{
		label: 'private key',
		pattern: /BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY/,
	},
	{
		label: 'personal email address',
		pattern: /[A-Za-z0-9._%+-]+@(?:gmail|hotmail|icloud|outlook)\.com/i,
	},
	{ label: 'GitHub access token', pattern: /gh[pousr]_[A-Za-z0-9_]{20,}/ },
];

const textExtensions = new Set( [
	'.css',
	'.html',
	'.js',
	'.json',
	'.md',
	'.php',
	'.svg',
	'.txt',
	'.xml',
] );

function walk( directory ) {
	return readdirSync( directory ).flatMap( ( entry ) => {
		const fullPath = join( directory, entry );
		return statSync( fullPath ).isDirectory()
			? walk( fullPath )
			: [ fullPath ];
	} );
}

if ( ! existsSync( packageRoot ) ) {
	errors.push(
		'Distribution directory does not exist. Run `npm run package` first.'
	);
} else {
	for ( const file of requiredFiles ) {
		if ( ! existsSync( join( packageRoot, file ) ) ) {
			errors.push( `Required release file is missing: ${ file }` );
		}
	}

	const files = walk( packageRoot );
	const paths = files.map( ( file ) =>
		relative( packageRoot, file ).replaceAll( '\\', '/' )
	);

	for ( const forbiddenPath of forbiddenPaths ) {
		if (
			paths.some(
				( file ) =>
					file === forbiddenPath ||
					file.startsWith( `${ forbiddenPath }/` )
			)
		) {
			errors.push(
				`Development-only path is present: ${ forbiddenPath }`
			);
		}
	}

	for ( const file of files ) {
		if (
			! textExtensions.has( extname( file ).toLowerCase() ) &&
			! file.endsWith( '/LICENSE' )
		) {
			continue;
		}

		const content = readFileSync( file, 'utf8' );
		for ( const { label, pattern } of privatePatterns ) {
			if ( pattern.test( content ) ) {
				errors.push(
					`${ label } found in ${ relative( packageRoot, file ) }`
				);
			}
		}
	}
}

if ( ! existsSync( archivePath ) ) {
	errors.push( 'Distribution archive does not exist.' );
}

const packageJson = JSON.parse(
	readFileSync( join( root, 'package.json' ), 'utf8' )
);
const pluginFile = readFileSync( join( root, 'wp-swiper.php' ), 'utf8' );
const readme = readFileSync( join( root, 'README.txt' ), 'utf8' );
const thirdPartyNotices = readFileSync(
	join( root, 'THIRD_PARTY_NOTICES.md' ),
	'utf8'
);
const assetMetadata = readFileSync(
	join( root, 'build', 'index.build.asset.php' ),
	'utf8'
);
const pluginVersion = pluginFile.match(
	/^\s*\*\s*Version:\s*([^\s]+)$/m
)?.[ 1 ];
const bundleVersion = pluginFile.match(
	/define\(\s*'DAWPS_BUNDLE_VERSION',\s*'([^']+)'\s*\)/
)?.[ 1 ];
const stableTag = readme.match( /^Stable tag:\s*([^\s]+)$/m )?.[ 1 ];
const swiperVersion = packageJson.devDependencies?.swiper;

if (
	packageJson.version !== pluginVersion ||
	packageJson.version !== stableTag
) {
	errors.push(
		`Version mismatch: package.json=${ packageJson.version }, wp-swiper.php=${ pluginVersion }, README.txt=${ stableTag }`
	);
}

if ( ! /^\d+\.\d+\.\d+$/.test( swiperVersion || '' ) ) {
	errors.push(
		'The Swiper development dependency must use an exact version.'
	);
} else {
	if ( bundleVersion !== swiperVersion ) {
		errors.push(
			`Swiper version mismatch: package.json=${ swiperVersion }, wp-swiper.php=${ bundleVersion }`
		);
	}

	for ( const asset of [
		'assets/swiper/swiper-bundle.min.css',
		'assets/swiper/swiper-bundle.min.js',
	] ) {
		const content = readFileSync( join( root, asset ), 'utf8' );

		if ( ! content.includes( `Swiper ${ swiperVersion }` ) ) {
			errors.push( `Swiper version header is incorrect in ${ asset }.` );
		}
	}

	if ( ! thirdPartyNotices.includes( `## Swiper ${ swiperVersion }` ) ) {
		errors.push(
			'THIRD_PARTY_NOTICES.md has an incorrect Swiper version.'
		);
	}
}

for ( const dependency of [ 'wp-api-fetch', 'wp-notices' ] ) {
	if ( ! assetMetadata.includes( `'${ dependency }'` ) ) {
		errors.push(
			`Editor asset metadata is missing dependency: ${ dependency }`
		);
	}
}

if ( errors.length > 0 ) {
	process.stderr.write(
		`Release verification failed:\n- ${ errors.join( '\n- ' ) }\n`
	);
	process.exitCode = 1;
} else {
	process.stdout.write( 'Release verification passed.\n' );
}
