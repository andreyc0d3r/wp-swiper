import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve( dirname( fileURLToPath( import.meta.url ) ), '..' );
const packageJson = JSON.parse(
	readFileSync( join( root, 'package.json' ), 'utf8' )
);
const actualTag = process.env.GITHUB_REF_NAME;
const expectedTag = `v${ packageJson.version }`;

if ( actualTag !== expectedTag ) {
	process.stderr.write(
		`Release tag mismatch: expected ${ expectedTag }, received ${
			actualTag || 'no tag'
		}\n`
	);
	process.exitCode = 1;
} else {
	process.stdout.write(
		`Release tag ${ actualTag } matches package.json.\n`
	);
}
