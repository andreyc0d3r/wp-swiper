jest.mock(
	'@wordpress/block-editor',
	() => ( {
		useBlockProps: {
			save: () => ( {
				className: 'wp-block-da-wp-swiper-slide',
			} ),
		},
		InnerBlocks: {
			Content: () => 'Serialized inner block',
		},
	} ),
	{ virtual: true }
);

const { TextDecoder, TextEncoder } = require( 'util' );

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;

// React and react-dom are provided transitively by the WordPress test environment.
// eslint-disable-next-line import/no-extraneous-dependencies
const React = require( 'react' );
// eslint-disable-next-line import/no-extraneous-dependencies
const { renderToStaticMarkup } = require( 'react-dom/server' );

global.wp = {
	blockEditor: {
		InnerBlocks: {
			Content: () => 'Serialized inner block',
		},
	},
	element: {
		Component: React.Component,
	},
	hooks: {
		applyFilters: ( hookName, value ) => value,
	},
};

const metadata = require( './block.json' );
const deprecated = require( './deprecated' ).default;
const saveCurrent = require( './save' ).default;

function getDefaultAttributes( overrides = {} ) {
	const attributes = Object.entries( metadata.attributes ).reduce(
		( defaults, [ name, definition ] ) => {
			if (
				Object.prototype.hasOwnProperty.call( definition, 'default' )
			) {
				defaults[ name ] = definition.default;
			}
			return defaults;
		},
		{}
	);

	return {
		...attributes,
		...overrides,
	};
}

const serializerCases = [
	[ 'current version', saveCurrent ],
	[ 'version without focal point', deprecated[ 0 ].save ],
	[ 'original version', deprecated[ 1 ].save ],
];

test( 'serializer matrix includes every registered deprecated save', () => {
	expect( serializerCases.slice( 1 ).map( ( [ , save ] ) => save ) ).toEqual(
		deprecated.map( ( definition ) => definition.save )
	);
} );

test.each( serializerCases )(
	'%s serializer output remains stable',
	( name, save ) => {
		const attributes = getDefaultAttributes( {
			containerWidth: 80,
			contentVHalign: 'bottom right',
			focalPoint: {
				x: 0.25,
				y: 0.75,
			},
			overlayColor: {
				rgb: {
					r: 12,
					g: 34,
					b: 56,
					a: 0.4,
				},
			},
			slideImg: 'https://example.com/slide.jpg',
			slug: 'slide-1',
			thumbImg: 'https://example.com/thumb.jpg',
		} );

		expect(
			renderToStaticMarkup(
				React.createElement( save, {
					attributes,
				} )
			)
		).toMatchSnapshot();
	}
);
