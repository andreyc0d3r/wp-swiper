<?php

/**
 * Register and render WP Swiper settings.
 *
 * @package WP_Swiper
 */
class WP_Swiper_Settings {

	/**
	 * Register WordPress hooks.
	 */
	public function __construct() {
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'settings_init' ) );
	}

	/**
	 * Add the settings page.
	 */
	public function add_admin_menu() {
		add_options_page(
			esc_html__( 'WP Swiper Settings', 'wp-swiper' ),
			esc_html__( 'WP Swiper', 'wp-swiper' ),
			'manage_options',
			'wp_swiper_settings',
			array( $this, 'options_page' )
		);
	}

	/**
	 * Register settings and fields.
	 */
	public function settings_init() {
		register_setting(
			'wp_swiper_settings',
			'wp_swiper_options',
			array(
				'type'              => 'array',
				'sanitize_callback' => array( $this, 'sanitize_options' ),
				'default'           => array(),
			)
		);

		add_settings_section(
			'wp_swiper_section',
			esc_html__( 'WP Swiper Settings', 'wp-swiper' ),
			array( $this, 'section_callback' ),
			'wp_swiper_settings'
		);

		add_settings_field(
			'wp_swiper_enqueue_toggle',
			esc_html__( 'Asset loading', 'wp-swiper' ),
			array( $this, 'enqueue_toggle_render' ),
			'wp_swiper_settings',
			'wp_swiper_section'
		);

		add_settings_field(
			'wp_swiper_debug_toggle',
			esc_html__( 'Debug information', 'wp-swiper' ),
			array( $this, 'debug_toggle_render' ),
			'wp_swiper_settings',
			'wp_swiper_section'
		);
	}

	/**
	 * Sanitize checkbox settings.
	 *
	 * @param mixed $input Submitted settings.
	 * @return array
	 */
	public function sanitize_options( $input ) {
		$sanitized = array();

		if ( ! is_array( $input ) ) {
			return $sanitized;
		}

		foreach ( array( 'enqueue_swiper', 'debug_swiper' ) as $option ) {
			if ( isset( $input[ $option ] ) && 'on' === $input[ $option ] ) {
				$sanitized[ $option ] = 'on';
			}
		}

		return $sanitized;
	}

	/**
	 * Render the debug setting.
	 */
	public function debug_toggle_render() {
		$options = get_option( 'wp_swiper_options', array() );
		?>
		<input
			id="wp-swiper-debug"
			type="checkbox"
			name="wp_swiper_options[debug_swiper]"
			value="on"
			<?php checked( isset( $options['debug_swiper'] ) && 'on' === $options['debug_swiper'] ); ?>
		>
		<label for="wp-swiper-debug"><?php esc_html_e( 'Add diagnostic information for administrators', 'wp-swiper' ); ?></label>
		<p class="description">
			<?php esc_html_e( 'When enabled, diagnostic data is added to the page source for logged-in administrators only.', 'wp-swiper' ); ?>
		</p>
		<?php
	}

	/**
	 * Render the global asset-loading setting.
	 */
	public function enqueue_toggle_render() {
		$options = get_option( 'wp_swiper_options', array() );
		?>
		<input
			id="wp-swiper-enqueue"
			type="checkbox"
			name="wp_swiper_options[enqueue_swiper]"
			value="on"
			<?php checked( isset( $options['enqueue_swiper'] ) && 'on' === $options['enqueue_swiper'] ); ?>
		>
		<label for="wp-swiper-enqueue"><?php esc_html_e( 'Load Swiper assets on every page', 'wp-swiper' ); ?></label>
		<p class="description">
			<?php esc_html_e( 'Enable this only for custom setups where automatic block detection cannot find the slider.', 'wp-swiper' ); ?>
		</p>
		<?php
	}

	/**
	 * Render the settings section description.
	 */
	public function section_callback() {
		esc_html_e( 'Configure frontend asset loading and administrator diagnostics.', 'wp-swiper' );
	}

	/**
	 * Render the settings page.
	 */
	public function options_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}
		?>
		<div class="wrap">
			<h1><?php esc_html_e( 'WP Swiper Settings', 'wp-swiper' ); ?></h1>
			<form action="options.php" method="post">
				<?php
				settings_fields( 'wp_swiper_settings' );
				do_settings_sections( 'wp_swiper_settings' );
				submit_button();
				?>
			</form>
		</div>
		<?php
	}
}

new WP_Swiper_Settings();
