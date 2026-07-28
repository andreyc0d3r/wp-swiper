import { normalizeSlidesPerView } from './slides-per-view';

test.each( [
	[ '1.2', 1.2 ],
	[ '2.75', 2.75 ],
	[ 3.5, 3.5 ],
	[ ' auto ', 'auto' ],
] )(
	'normalizes %p without discarding fractional values',
	( value, expected ) => {
		expect( normalizeSlidesPerView( value ) ).toBe( expected );
	}
);

test.each( [ '', 'not-a-number', 0, -1, null, undefined ] )(
	'uses one for unsupported value %p',
	( value ) => {
		expect( normalizeSlidesPerView( value ) ).toBe( 1 );
	}
);
