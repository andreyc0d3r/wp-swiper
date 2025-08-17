<?php
if (! class_exists('WP_Swiper_Settings')) {

	class WP_Swiper_Settings
	{

		// Constructor to hook into WordPress actions
		public function __construct()
		{
			add_action('admin_menu', [$this, 'add_admin_menu']);
			add_action('admin_init', [$this, 'settings_init']);
		}

		// Function to add the settings page under the "Settings" menu
		public function add_admin_menu()
		{
			add_options_page(
				'WP Swiper Settings',		// Page title
				'WP Swiper',			// Menu title
				'manage_options',			// Capability required to access the page
				'wp_swiper_settings',		// Menu slug
				[$this, 'options_page']	// Function to display the page content
			);
		}

		// Function to initialize the settings
		public function settings_init()
		{
			// Register the settings
			register_setting('wp_swiper_settings', 'wp_swiper_options', [
				'default' => [
					'legacy_toggle' => 'off' // Default value is 'off'
				]
			]);

			// Add a section for the settings
			add_settings_section(
				'wp_swiper_section',          // Section ID
				__('WP Swiper Settings', 'wp_swiper'), // Section title
				[$this, 'section_callback'], // Callback to render the section description
				'wp_swiper_settings'          // Page slug where the section will appear
			);

			// Add the legacy toggle checkbox field
			add_settings_field(
				'wp_swiper_legacy_toggle',     // Field ID
				__('Use Legacy Code', 'wp_swiper'), // Field title
				[$this, 'legacy_toggle_render'],     // Callback function to render the checkbox
				'wp_swiper_settings',          // Page slug
				'wp_swiper_section'            // Section ID
			);

			// Add the enqueue Swiper JS toggle field
			add_settings_field(
				'wp_swiper_enqueue_toggle',   // Field ID
				__('Load Swiper JS on every page', 'wp_swiper'), // Field title
				[$this, 'enqueue_toggle_render'],   // Callback function to render the checkbox
				'wp_swiper_settings',        // Page slug
				'wp_swiper_section'          // Section ID
			);

			add_settings_field(
				'wp_swiper_debug_toggle',   // Field ID
				__('Output debug info to the frontend', 'wp_swiper'), // Field title
				[$this, 'debug_toggle_render'],   // Callback function to render the checkbox
				'wp_swiper_settings',        // Page slug
				'wp_swiper_section'          // Section ID
			);
		}
		public function debug_toggle_render()
		{
			$options = get_option('wp_swiper_options');
			$checked = isset($options['debug_swiper']) && $options['debug_swiper'] === 'on' ? 'checked' : '';
			?>
			<input type='checkbox' name='wp_swiper_options[debug_swiper]' <?php echo $checked; ?> value='on'>
			<label for='wp_swiper_options[debug_swiper]'><?php _e('Debug Mode', 'wp_swiper'); ?></label>
			<p class="description">
				<?php _e('If checked we output debug information that can be viewed in the source code on the frontend. Look for a div with a .wp-swiper-debug class', 'wp_swiper'); ?>
			</p>

		<?php

		}

		// Function to render the checkbox for "Use Legacy Code"
		public function legacy_toggle_render()
		{
			$options = get_option('wp_swiper_options');
			$checked = isset($options['legacy_toggle']) && $options['legacy_toggle'] === 'on' ? 'checked' : '';
		?>
			<input type='checkbox' name='wp_swiper_options[legacy_toggle]' <?php echo $checked; ?> value='on'>
			<label for='wp_swiper_options[legacy_toggle]'><?php _e('Enable legacy code', 'wp_swiper'); ?></label>
			<p class="description">
				<?php _e('TO BE DEPRECATED. I adivce that you transition away using legacy code at some point. Legacy code relies on embedding configuration details directly into the HTML elements through data attributes, which is a more traditional approach. The newer implementation uses a modern technique where a JavaScript object (in JSON format) is passed to configure Swiper. This method allows for greater flexibility and is generally easier to maintain and scale.', 'wp_swiper'); ?>
			</p>

		<?php

		}

		// Function to render the checkbox for "Load Swiper JS if Gutenberg Block is used"
		public function enqueue_toggle_render()
		{
			$options = get_option('wp_swiper_options');
			$checked = isset($options['enqueue_swiper']) && $options['enqueue_swiper'] === 'on' ? 'checked' : '';
		?>
			<input type='checkbox' name='wp_swiper_options[enqueue_swiper]' <?php echo $checked; ?> value='on'>
			<label for='wp_swiper_options[enqueue_swiper]'><?php _e('Always load Swiper JS bundle on every page.', 'wp_swiper'); ?></label>
			<p class="description">
				<?php _e('Enable this to load the Swiper JavaScript file on all pages instead of only when the WP-Swiper Gutenberg block is used. Helps with custom setups.', 'wp_swiper'); ?>
			</p>
		<?php
		}

		// Callback to render the section description
		public function section_callback()
		{
			echo __('Adjust settings for Swiper integration below.', 'wp_swiper');
		}

		// Function to display the options page content
		public function options_page()
		{
		?>
			<form action='options.php' method='post'>
				<?php
				settings_fields('wp_swiper_settings');
				do_settings_sections('wp_swiper_settings');
				submit_button();
				?>
			</form>
<?php
		}
	}

	// Instantiate the class
	new WP_Swiper_Settings();
}
?>