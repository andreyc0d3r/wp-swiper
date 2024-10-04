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

	/**
	 * Function to check if a post contains a 'da/wp-swiper-slides' block.
	 * This function handles reusable blocks (core/block) and standard blocks.
	 *
	 * @param WP_Post $post The post object to check.
	 * @return bool Returns true if the 'da/wp-swiper-slides' block is found, false otherwise.
	 */
	function contains_wp_swiper_block($post)
	{
		if (!isset($post->post_content)) {
			return false; // No content to parse.
		}

		// Parse the blocks in the post content
		$blocks = parse_blocks($post->post_content);

		// Recursively search for the 'da/wp-swiper-slides' block in parsed blocks
		function has_wp_swiper_block($blocks)
		{
			foreach ($blocks as $block) {
				// Check if the block is a reusable block (core/block)
				if ($block['blockName'] === 'core/block' && isset($block['attrs']['ref'])) {
					// Fetch the reusable block content by reference (ref)
					$reusable_block = get_post($block['attrs']['ref']);

					// Parse the reusable block content
					if ($reusable_block && !empty($reusable_block->post_content)) {
						$reusable_blocks = parse_blocks($reusable_block->post_content);
						// Recursively check the parsed reusable block
						if (has_wp_swiper_block($reusable_blocks)) {
							return true;
						}
					}
				}

				// Check if the block is of the type 'da/wp-swiper-slides'
				if ($block['blockName'] === 'da/wp-swiper-slides') {
					return true;
				}

				// Recursively check inner blocks, if any
				if (!empty($block['innerBlocks'])) {
					if (has_wp_swiper_block($block['innerBlocks'])) {
						return true;
					}
				}
			}
			return false;
		}

		// Check if the block exists in the parsed blocks
		if (has_wp_swiper_block($blocks)) {
			return true;
		}

		// Fallback: Check if 'wp-swiper' exists in post_content
		if (strpos($post->post_content, 'wp-swiper') !== false) {
			return true;
		}

		return false;
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
					$this->contains_wp_swiper_block($post)
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
			$this->plugin_name . '-bundle-js',
			plugin_dir_url(__DIR__) .  'public/js/swiper-bundle.min.js',
			array(),
			DAWPS_BUNDLE_VERSION
		);

		wp_enqueue_script(
			$this->plugin_name . '-bundle-js'
		);

		$options = get_option('wp_swiper_options');
		$legacy_toggle = isset($options['legacy_toggle']) && $options['legacy_toggle'] === 'on';

		if ($legacy_toggle) {
			wp_register_script(
				$this->plugin_name . '-frontend-js',
				plugin_dir_url(__DIR__) . 'gutenberg/js/frontend_block_legacy.js',
				array($this->plugin_name . '-bundle-js'),
				DAWPS_PLUGIN_VERSION
			);
		} else {
			wp_register_script(
				$this->plugin_name . '-frontend-js',
				plugin_dir_url(__DIR__) . 'gutenberg/js/frontend_block.js',
				array($this->plugin_name . '-bundle-js'),
				DAWPS_PLUGIN_VERSION
			);
		}

		wp_enqueue_script(
			$this->plugin_name . '-frontend-js'
		);
	}
}
