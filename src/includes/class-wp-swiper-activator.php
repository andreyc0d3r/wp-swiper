<?php

/**
 * Fired during plugin activation
 *
 * @link       https://digitalapps.co
 * @since      1.0.0
 *
 * @package    AdUnblocker
 * @subpackage AdUnblocker/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.1
 * @package    AdUnblocker
 * @subpackage AdUnblocker/includes
 * @author     Your Name <support@digitalapps.co>
 */
class WP_Swiper_Activator {

    public static function activate() {

        $plugin_name = 'adunblocker';
        $option_name = 'adunblocker-options';

        $settings = array (
            $plugin_name . '-status'            =>      'y',
            $plugin_name . '-title'             =>      'Adblock Detected!',
            $plugin_name . '-content'           =>      'Our website is made possible by displaying online advertisements to our visitors.<br>Please consider supporting us by whitelisting our website.',
            $plugin_name . '-bg-color'          =>      '#FFFFFF',
            $plugin_name . '-overlay-color'     =>      '#000000',
            $plugin_name . '-title-color'       =>      '#000000',
            $plugin_name . '-text-color'        =>      '#000000',
            $plugin_name . '-type'              =>      'permanent',
            $plugin_name . '-style'             =>      'modal',
            $plugin_name . '-delay'             =>      '5000',
            $plugin_name . '-file-name'         =>      ''
        );

        $deprecated = null;
        $autoload = 'no';

        if ( get_option( $option_name ) === false ) {

            $settings[$plugin_name . '-file-name'] = AdUnblocker::get_random_string();
            add_option( $option_name, $settings, $deprecated, $autoload );

        } else {

            $settings[$plugin_name . '-file-name'] = AdUnblocker::get_random_string();
            update_option( $option_name, $settings, $deprecated, $autoload );

        }

        update_option( $option_name, $settings );

        if( is_admin() ) {
            $wp_upload_dir = wp_upload_dir();

            copy( plugin_dir_path( __DIR__ ) . 'public/css/adunblocker-public.css', $wp_upload_dir['basedir'] . '/' . $settings[$plugin_name . '-file-name'] . '.css' );
            copy( plugin_dir_path( __DIR__ ) . 'public/js/adunblocker-public.js', $wp_upload_dir['basedir'] . '/' . $settings[$plugin_name . '-file-name'] . '.js' );

            $contents = '';
            $string_to_replace = "da-adunblocker";
            $contents = file_get_contents( $wp_upload_dir['basedir'] . '/' . $settings[$plugin_name . '-file-name'] . '.css' );
            $contents = str_replace( $string_to_replace, $settings[$plugin_name . '-file-name'], $contents );
            file_put_contents( $wp_upload_dir['basedir'] . '/' . $settings[$plugin_name . '-file-name'] . '.css', $contents );

        }

        add_option( $plugin_name . '-install-date', date( 'Y-m-d h:i:s' ) );
        add_option( $plugin_name . '-review-notify', 'no' );

    }

}