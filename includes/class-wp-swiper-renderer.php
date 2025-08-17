<?php

/**
 * Block Renderer Class for WP Swiper
 *
 * @link       https://digitalapps.com
 * @since      1.0.0
 *
 * @package    WP_Swiper
 * @subpackage WP_Swiper/includes
 */

class WP_Swiper_Renderer {

    /**
     * Render callback for blocks
     *
     * @since    1.0.0
     * @param    array    $attributes    Block attributes
     * @param    string   $content       Block content
     * @param    object   $block         Block object
     * @return   string                  Rendered block content
     */
    public function render_callback($attributes, $content, $block) {
        // For now, return the content as-is since the blocks are client-side rendered
        // This can be extended for server-side rendering if needed
        return $content;
    }
}
