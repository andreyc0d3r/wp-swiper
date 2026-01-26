<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/admin
 */

class WP_Swiper_Admin {

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
    private $error_log;
    private $options;

    /**
     * Initialize the class and set its properties.
     *
     * @since           1.0.0
     * @param           string      $plugin_name        The name of this plugin.
     * @param           string      $version            The version of this plugin.
     */
    public function __construct( $plugin_name, $version ) {

        $this->plugin_name = $plugin_name;
        $this->version = $version;

        $this->set_options();

    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since   1.0.0
     */
    public function enqueue_styles() {

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since   1.0.0
     */
    public function enqueue_scripts( $hook_suffix ) {


    }

    /**
     * Sets the class variable $options
     */
    private function set_options() {
        $this->options = get_option( $this->plugin_name . '-options' );
    } // set_options()

    public function enqueue_block_editor_styles() {
        wp_enqueue_style(
			$this->plugin_name . '-block-editor-style',
			DAWPS_PLUGIN_URL . "css/admin_block.css",
			array(),
			'1.0.0'
		);
        wp_enqueue_style( 'dashicons' );
    }

    public function register_gutenberg_block() {

		// Skip block registration if Gutenberg is not enabled/merged.
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}

        // Check if we have the new build assets
        $asset_file_path = DAWPS_PLUGIN_PATH . 'build/index.build.asset.php';

        if (file_exists($asset_file_path)) {
            $asset_file = include($asset_file_path);
            $dependencies = isset($asset_file['dependencies']) ? $asset_file['dependencies'] : array('wp-blocks', 'wp-element');
            $version = isset($asset_file['version']) ? $asset_file['version'] : DAWPS_PLUGIN_VERSION;
            $script_url = DAWPS_PLUGIN_URL . 'build/index.build.js';
        } else {
            // Minimal fallback - let WordPress handle most dependencies automatically
            $dependencies = array('wp-blocks', 'wp-element');
            $version = DAWPS_PLUGIN_VERSION;
            $script_url = DAWPS_PLUGIN_URL . 'gutenberg/js/admin_block.js';
        }

		wp_register_script(
			'wpswiper-block-editor',
			$script_url,
			$dependencies,
			$version
        );

        wp_enqueue_script( 'wpswiper-block-editor' );

    }

    /**
     * Display admin notice for beta version announcement
     *
     * @since    1.4.0
     */
    public function display_beta_announcement_notice() {
        // Only show to users who can manage options
        if ( ! current_user_can( 'manage_options' ) ) {
            return;
        }

        // Check if notice has been dismissed
        $dismissed = get_user_meta( get_current_user_id(), 'wpswiper_beta_140_dismissed_v2', true );
        if ( $dismissed ) {
            return;
        }

        ?>
        <div class="notice notice-info is-dismissible wpswiper-beta-notice" data-notice="wpswiper_beta_140">
            <p>
                <strong><?php esc_html_e( 'WP Swiper 1.4.0-beta.1 is now available for testing!', 'wpswiper' ); ?></strong>
            </p>
            <p>
                <?php 
                printf(
                    /* translators: %s: URL to plugin page */
                    esc_html__( 'New version is coming soon! Check out the new features including drag and drop photos, customizable svg colors, and more. More details on the %s.', 'wpswiper' ),
                    '<a href="https://wordpress.org/plugins/wp-swiper/" target="_blank">' . esc_html__( 'plugin page', 'wpswiper' ) . '</a>'
                );
                ?>
            </p>
            <p>
                <?php 
                printf(
                    /* translators: 1: Download link, 2: GitHub issues link */
                    esc_html__( '%1$s | %2$s', 'wpswiper' ),
                    '<a href="https://downloads.wordpress.org/plugin/wp-swiper.1.4.0-beta.1.zip" target="_blank"><strong>' . esc_html__( 'Download Beta', 'wpswiper' ) . '</strong></a>',
                    '<a href="https://github.com/andreyc0d3r/wp-swiper/issues" target="_blank">' . esc_html__( 'Report Issues & Feedback', 'wpswiper' ) . '</a>'
                );
                ?>
            </p>
        </div>
        <script type="text/javascript">
            jQuery(document).ready(function($) {
                $(document).on('click', '.wpswiper-beta-notice .notice-dismiss', function() {
                    $.ajax({
                        url: ajaxurl,
                        type: 'POST',
                        data: {
                            action: 'wpswiper_dismiss_beta_notice',
                            nonce: '<?php echo wp_create_nonce( 'wpswiper_dismiss_beta_notice' ); ?>'
                        }
                    });
                });
            });
        </script>
        <?php
    }

    /**
     * Handle AJAX request to dismiss beta notice
     *
     * @since    1.4.0
     */
    public function dismiss_beta_notice() {
        check_ajax_referer( 'wpswiper_dismiss_beta_notice', 'nonce' );

        update_user_meta( get_current_user_id(), 'wpswiper_beta_140_dismissed_v2', true );

        wp_send_json_success();
    }
    

}
