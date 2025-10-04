<?php

/**
 * Block Registration Class for WP Swiper
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/includes
 */

class WP_Swiper_Block_Registration {

    /**
     * The block name from JSON
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $block_name    The block name
     */
    private $block_name;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    function __construct() {
        //--------------------------
        // LOAD JSON - START
        //--------------------------
        // Read the JSON file
        $json_data = $this->read_json();

        // Name - Used to register styles and scripts
        if (isset($json_data['name'])) {
            $this->block_name = $json_data['name'];
        }

        if (empty($this->block_name)) {
            return;
        }

        $modifiedString = str_replace('/', '-', $this->block_name);
        $this->block_name = $modifiedString;
        //--------------------------
        // LOAD JSON - END
        //--------------------------

        //--------------------------
        // HOOKS - START
        //--------------------------
        add_action('init', [$this, 'register_block']);
        add_action('enqueue_block_editor_assets', [$this, 'editor_assets']);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
    }

    /**
     * Read and parse block.json file
     *
     * @since    1.0.0
     * @return   array|false    JSON data or false on error
     */
    function read_json() {
        // Define the path to the JSON file - use slides block.json as primary
        $filePath = plugin_dir_path(dirname(dirname(__FILE__))) . 'build/blocks/slides/block.json';

        // Check if the file exists and is readable
        if (file_exists($filePath) && is_readable($filePath)) {
            // Read the JSON file
            $json = file_get_contents($filePath);

            // Decode the JSON file
            $json_data = json_decode($json, true);

            // Check for JSON decoding errors
            if (json_last_error() !== JSON_ERROR_NONE) {
                // Handle the error appropriately
                error_log("JSON decoding error: " . json_last_error_msg());
                return false;
            } else {
                return $json_data;
            }
        } else {
            // Handle the error if the file doesn't exist or isn't readable
            return false;
        }
    }

    /**
     * Enqueue editor assets
     *
     * @since    1.0.0
     */
    function editor_assets() {
        // Check if we're in the block editor
        if (!is_admin() || !wp_script_is('wp-block-editor', 'registered')) {
            return;
        }

        $plugin_dir_path = plugin_dir_path(dirname(dirname(__FILE__)));
        $plugin_dir_url = plugin_dir_url(dirname(dirname(__FILE__)));
        $asset_file_path = $plugin_dir_path . 'build/index.build.asset.php';
        
        if (file_exists($asset_file_path)) {
            $asset_file = include($asset_file_path);
            $dependencies = isset($asset_file['dependencies']) ? $asset_file['dependencies'] : array('wp-blocks', 'wp-element');
            $version = isset($asset_file['version']) ? $asset_file['version'] : DAWPS_PLUGIN_VERSION;
        } else {
            // Minimal fallback - WordPress will handle most dependencies automatically
            $dependencies = array('wp-blocks', 'wp-element');
            $version = DAWPS_PLUGIN_VERSION;
        }

        wp_register_script(
            $this->block_name,
            $plugin_dir_url . 'build/index.build.js',
            $dependencies,
            $version
        );
        
        wp_enqueue_script($this->block_name);
        
        // Enqueue editor styles
        $editor_css_path = $plugin_dir_path . 'build/index.css';
        if (file_exists($editor_css_path)) {
            wp_enqueue_style(
                $this->block_name . '-editor', 
                $plugin_dir_url . 'build/index.css',
                array(),
                $version
            );
        }
    }

    /**
     * Register the block
     *
     * @since    1.0.0
     */
    function register_block() {
        if (!function_exists('register_block_type')) {
            return;
        }

        $renderer = new WP_Swiper_Renderer();
        $plugin_dir_path = plugin_dir_path(dirname(dirname(__FILE__)));

        // Register slides block
        $slides_block_path = $plugin_dir_path . 'build/blocks/slides';
        if (file_exists($slides_block_path . '/block.json')) {
            register_block_type($slides_block_path, array(
                'render_callback' => [$renderer, 'render_callback']
            ));
        }

        // Register slide block
        $slide_block_path = $plugin_dir_path . 'build/blocks/slide';
        if (file_exists($slide_block_path . '/block.json')) {
            register_block_type($slide_block_path, array(
                'render_callback' => [$renderer, 'render_callback']
            ));
        }
    }

    /**
     * Enqueue frontend assets
     *
     * @since    1.0.0
     */
    function enqueue_frontend_assets() {
        if (!is_admin()) { // Ensures the styles are not loaded in the admin area
            $plugin_dir_path = plugin_dir_path(dirname(dirname(__FILE__)));
            $plugin_dir_url = plugin_dir_url(dirname(dirname(__FILE__)));
            
            // Convert the URL to a file path
            $script_path = $plugin_dir_path . 'build/frontend.build.js';
            $style_path = $plugin_dir_path . 'build/frontend.css';

            // Check if the file exists
            if (file_exists($script_path)) {
                wp_enqueue_script(
                    $this->block_name . '-frontend',
                    $plugin_dir_url . 'build/frontend.build.js',
                    array('jquery'),
                    DAWPS_PLUGIN_VERSION
                );
            }
            
            if (file_exists($style_path)) {
                // If the file exists, enqueue the style
                wp_enqueue_style(
                    $this->block_name . '-frontend',
                    $plugin_dir_url . 'build/frontend.css',
                    array(),
                    DAWPS_PLUGIN_VERSION
                );
            }
        }
    }


}
