// WordPress provides these packages at runtime.
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { Button } from '@wordpress/components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { __ } from '@wordpress/i18n';

/**
 * Present starting templates inside a newly inserted WP Swiper block.
 *
 * @param {Object}   props           Component props.
 * @param {string}   props.clientId  Parent block client ID.
 * @param {Object[]} props.templates Available starting templates.
 * @param {Function} props.onSelect  Apply a starting template.
 * @return {Object} Template selector.
 */
export default function TemplateSelector( { clientId, templates, onSelect } ) {
	const headingId = `wp-swiper-template-selector-${ clientId }`;

	return (
		<section
			className="wpSwiperTemplateSelector"
			aria-labelledby={ headingId }
		>
			<div className="wpSwiperTemplateSelector__header">
				<h2
					className="wpSwiperTemplateSelector__heading"
					id={ headingId }
				>
					{ __( 'Choose a starting template', 'wp-swiper' ) }
				</h2>
				<p className="wpSwiperTemplateSelector__introduction">
					{ __(
						'Start blank or add editable slides and recommended settings for a common carousel layout.',
						'wp-swiper'
					) }
				</p>
			</div>
			<div className="wpSwiperTemplateSelector__grid">
				{ templates.map( ( template ) => (
					<Button
						key={ template.name }
						className="wpSwiperTemplateSelector__option"
						icon={ template.icon }
						iconSize={ 24 }
						onClick={ () => onSelect( template ) }
						variant="secondary"
					>
						<span className="wpSwiperTemplateSelector__optionText">
							<span className="wpSwiperTemplateSelector__optionTitle">
								{ template.title }
							</span>
							<span className="wpSwiperTemplateSelector__optionDescription">
								{ template.description }
							</span>
						</span>
					</Button>
				) ) }
			</div>
		</section>
	);
}
