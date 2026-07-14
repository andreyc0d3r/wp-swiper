<?php

/**
 * Public asset loading for WP Swiper.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/public
 */
class WP_Swiper_Public {

	/**
	 * Plugin script handle prefix.
	 *
	 * @var string
	 */
	private $plugin_name;

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	private $version;

	/**
	 * Block detector.
	 *
	 * @var WP_Swiper_Block_Detector
	 */
	protected $block_detector;

	/**
	 * Initialize the class.
	 *
	 * @param string $plugin_name Plugin script handle prefix.
	 * @param string $version     Plugin version.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name    = $plugin_name;
		$this->version        = $version;
		$this->block_detector = new WP_Swiper_Block_Detector();
	}

	/**
	 * Load frontend assets when required by the current page.
	 */
	public function enqueue_frontend_assets() {
		global $post;

		$options        = get_option( 'wp_swiper_options', array() );
		$load_swiper    = isset( $options['enqueue_swiper'] ) && 'on' === $options['enqueue_swiper'];
		$debug_swiper   = isset( $options['debug_swiper'] ) && 'on' === $options['debug_swiper'];
		$post_content   = is_object( $post ) && isset( $post->post_content ) ? $post->post_content : '';
		$contains_block = $this->block_detector->contains_wp_swiper_block( $post );

		if ( $debug_swiper && current_user_can( 'manage_options' ) ) {
			$debug_data = array(
				'version'        => DAWPS_PLUGIN_VERSION,
				'always_load'    => $load_swiper,
				'has_block'      => has_block( 'da/wp-swiper-slides', $post_content ),
				'block_detected' => $contains_block,
			);

			printf(
				'<!-- WP Swiper debug: %s -->',
				esc_html( wp_json_encode( $debug_data ) )
			);
		}

		if ( $load_swiper || $contains_block ) {
			$this->load_wp_swiper();
		}
	}

	/**
	 * Register and enqueue the Swiper runtime and plugin frontend assets.
	 */
	private function load_wp_swiper() {
		$frontend_css_path = DAWPS_PLUGIN_PATH . 'build/frontend.css';
		$frontend_js_path  = DAWPS_PLUGIN_PATH . 'build/frontend.build.js';

		if ( file_exists( $frontend_css_path ) ) {
			wp_enqueue_style(
				$this->plugin_name . '-block-frontend',
				DAWPS_PLUGIN_URL . 'build/frontend.css',
				array(),
				$this->version
			);
		}

		wp_enqueue_style(
			$this->plugin_name . '-bundle-css',
			DAWPS_PLUGIN_URL . 'assets/swiper/swiper-bundle.min.css',
			array(),
			DAWPS_BUNDLE_VERSION
		);

		wp_enqueue_script(
			$this->plugin_name . '-bundle',
			DAWPS_PLUGIN_URL . 'assets/swiper/swiper-bundle.min.js',
			array(),
			DAWPS_BUNDLE_VERSION,
			false
		);

		if ( ! file_exists( $frontend_js_path ) ) {
			return;
		}

		$script_args = array(
			'deps' => array( $this->plugin_name . '-bundle' ),
			'args' => array(
				'in_footer' => false,
			),
		);

		$filtered_args = apply_filters( $this->plugin_name . '_frontend_js_register_args', $script_args );

		if ( is_array( $filtered_args ) ) {
			if ( isset( $filtered_args['deps'] ) && is_array( $filtered_args['deps'] ) ) {
				$script_args['deps'] = array_values( $filtered_args['deps'] );
			}

			if ( isset( $filtered_args['args'] ) && ( is_array( $filtered_args['args'] ) || is_bool( $filtered_args['args'] ) ) ) {
				$script_args['args'] = $filtered_args['args'];
			}
		}

		wp_enqueue_script(
			$this->plugin_name . '-frontend-js',
			DAWPS_PLUGIN_URL . 'build/frontend.build.js',
			$script_args['deps'],
			$this->version,
			$script_args['args']
		);
	}
}
