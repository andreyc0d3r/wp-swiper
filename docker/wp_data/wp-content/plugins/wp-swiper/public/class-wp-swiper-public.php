<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/public
 * @author     Andrey Matveyev <andrey@digitalapps.co>
 */
class WP_Swiper_Public
{

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $file_name;
	private $settings;
	protected $block_detector = null;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct($plugin_name, $version)
	{

		$this->plugin_name = $plugin_name;
		$this->version = $version;
		$this->settings = $this->get_options_data();
		$this->block_detector = new WP_Swiper_Block_Detector();
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function localize_script()
	{

		$nonces = apply_filters('daau_nonces', array(
			'get_plugin_data'       => wp_create_nonce('get-plugin-data')
		));

		$data = apply_filters('daau_data', array(
			'this_url'               => esc_html(addslashes(home_url())) . '/wp-admin/admin-ajax.php',
			'nonces'                 => $nonces
		));

		// wp_localize_script( $handle, $name, $data );
		wp_localize_script(
			$this->plugin_name,
			'daau_app',
			$data
		);
	}

	public function get_options_data()
	{

		$settings = array();
		$settings = get_option($this->plugin_name . '-options');

		return $settings;
	}


	function enqueue_frontend_assets()
	{
		global $post;
		$options = get_option('wp_swiper_options');
		$load_swiper = isset($options['enqueue_swiper']) && $options['enqueue_swiper'] === 'on';
		$debug_swiper = isset($options['debug_swiper']) && $options['debug_swiper'] === 'on';

		if ($debug_swiper) {
			echo '<div class="wp-swiper-debug" style="display:none">';
			var_dump([
				'wp_swiper_version' => DAWPS_PLUGIN_VERSION,
				'load_swiper' => $load_swiper,
				'has_block_wp_swiper_slides' => has_block('da/wp-swiper-slides'),
				'found_wp_swiper_class' => isset($post->post_content) ? strpos($post->post_content, 'wp-swiper') : false
			]);
			echo '</div>';
		}

		// Check if the current post contains the Swiper Gutenberg block and the option is enabled
		if (true === $load_swiper) {
			$this->loadWpSwiper();
		} else {
			if (function_exists('register_block_type')) {
				if (
					!$load_swiper &&
					$this->block_detector->contains_wp_swiper_block($post)
				) {
					$this->loadWpSwiper();
				}
			}
		}
	}

	function loadWpSwiper()
	{
		wp_enqueue_style(
			$this->plugin_name . '-block-frontend',
			plugin_dir_url(__DIR__) . 'css/frontend_block.css',
			array(),
			DAWPS_PLUGIN_VERSION
		);

		wp_enqueue_style(
			$this->plugin_name . '-bundle-css',
			plugin_dir_url(__DIR__) .  'public/css/swiper-bundle.min.css',
			array(),
			DAWPS_BUNDLE_VERSION
		);

		wp_register_script(
			$this->plugin_name . '-bundle',
			plugin_dir_url(__DIR__) .  'public/js/swiper-bundle.min.js',
			array(),
			DAWPS_BUNDLE_VERSION
		);

		wp_enqueue_script(
			$this->plugin_name . '-bundle'
		);

		$options = get_option('wp_swiper_options');
		$legacy_toggle = isset($options['legacy_toggle']) && $options['legacy_toggle'] === 'on';

		// ---------

		// Set up default arguments, with conditional logic based on $legacy_toggle.
		$register_args = [
			'handle'    => $this->plugin_name . '-frontend-js',
			'src'       => $legacy_toggle
				? plugin_dir_url(__DIR__) . 'gutenberg/js/frontend_block_legacy.js'
				: plugin_dir_url(__DIR__) . 'gutenberg/js/frontend_block.js',
			'deps'      => [$this->plugin_name . '-bundle'],
			'ver'       => DAWPS_PLUGIN_VERSION,
			'in_footer' => false,
		];

		// Allow only 'deps' and 'in_footer' to be modified through filters.
		$filtered_args = apply_filters(
			"{$this->plugin_name}_frontend_js_register_args",
			[
				'deps'      => $register_args['deps'],
				'in_footer' => $register_args['in_footer'],
			]
		);

		// Merge the filtered 'deps' and 'in_footer' values back with the default arguments.
		$register_args['deps'] = $filtered_args['deps'];
		$register_args['in_footer'] = $filtered_args['in_footer'];

		// Register the script with merged arguments.
		wp_register_script(
			$register_args['handle'],
			$register_args['src'],
			$register_args['deps'],
			$register_args['ver'],
			$register_args['in_footer']
		);

		// Enqueue the script.
		wp_enqueue_script($register_args['handle']);
	}
}
