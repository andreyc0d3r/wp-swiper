<?php

class WP_Swiper_Block_Detector
{
	protected $block_name = 'da/wp-swiper-slides';

	/**
	 * Main method to detect the wp-swiper block in posts, templates, or theme files.
	 */
	public function contains_wp_swiper_block($post)
	{
		if (!is_object($post) || !isset($post->post_content)) {
			return false; // No content to parse.
		}

		// Parse the blocks in the post content
		$blocks = parse_blocks($post->post_content);

		// Check for the block in the post content, template parts, and theme template files
		return $this->has_wp_swiper_block($blocks)
			|| $this->check_template_parts_for_block($blocks)
			|| $this->check_used_templates_for_block()
			|| strpos($post->post_content, 'wp-swiper') !== false;
	}

	/**
	 * Recursive function to check for 'da/wp-swiper-slides' or reusable blocks.
	 */
	protected function has_wp_swiper_block($blocks)
	{
		foreach ($blocks as $block) {
			// Handle reusable blocks (core/block)
			if ($block['blockName'] === 'core/block' && isset($block['attrs']['ref'])) {
				$reusable_block = get_post($block['attrs']['ref']);
				if ($reusable_block && !empty($reusable_block->post_content)) {
					$reusable_blocks = parse_blocks($reusable_block->post_content);
					if ($this->has_wp_swiper_block($reusable_blocks)) {
						return true;
					}
				}
			}

			// Check if the block is of the type 'da/wp-swiper-slides'
			if ($block['blockName'] === $this->block_name) {
				return true;
			}

			// Recursively check inner blocks
			if (!empty($block['innerBlocks'])) {
				if ($this->has_wp_swiper_block($block['innerBlocks'])) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Check for blocks in template parts (wp_template, wp_template_part).
	 * Handles cases where template parts are called and contain the block.
	 */
	protected function check_template_parts_for_block($blocks)
	{
		foreach ($blocks as $block) {
			// Check for template part inclusion (e.g., 'wp:template-part')
			if ($block['blockName'] === 'core/template-part' && isset($block['attrs']['slug'])) {
				// Get the template part by its slug
				$template_part = $this->get_template_part_by_slug($block['attrs']['slug']);

				// If the template part exists, parse and check for the block
				if ($template_part) {
					$template_blocks = parse_blocks($template_part->post_content);
					if ($this->has_wp_swiper_block($template_blocks)) {
						return true;
					}
				}

				// Also check if template parts are stored as physical files in the theme's `/parts` directory
				if ($this->check_parts_directory_for_block($block['attrs']['slug'])) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Get the template part by slug.
	 * This retrieves the wp_template_part post by its slug.
	 */
	protected function get_template_part_by_slug($slug)
	{
		$args = [
			'name'        => $slug,
			'post_type'   => 'wp_template_part',
			'numberposts' => 1
		];

		$template_parts = get_posts($args);

		if (!empty($template_parts)) {
			return $template_parts[0];
		}

		return null;
	}

	/**
	 * Check for blocks in the used template files for the current page.
	 */
	protected function check_used_templates_for_block()
	{
		$included_files = $this->get_used_templates();

		foreach ($included_files as $file) {
			if (file_exists($file)) {
				$template_content = file_get_contents($file);
				$blocks = parse_blocks($template_content);

				if ($this->has_wp_swiper_block($blocks)) {
					return true;
				}
			}
		}

		return false;
	}

	/**
	 * Get the list of template files used on the current page.
	 */
	protected function get_used_templates()
	{
		$included_files = get_included_files();
		$stylesheet_dir = str_replace('\\', '/', get_stylesheet_directory());
		$template_dir   = str_replace('\\', '/', get_template_directory());

		// Filter out files not within the active theme directories
		foreach ($included_files as $key => $path) {
			$path = str_replace('\\', '/', $path);

			if (false === strpos($path, $stylesheet_dir) && false === strpos($path, $template_dir)) {
				unset($included_files[$key]);
			}
		}

		return $included_files;
	}

	/**
	 * Check the /parts directory for template parts, parse their blocks, and check for the wp-swiper block.
	 */
	protected function check_parts_directory_for_block($slug = null)
	{
		// Define the path to the theme's /parts folder
		$parts_folder = get_template_directory() . '/parts/';

		if (!is_dir($parts_folder)) {
			return false;
		}

		// Look for template part files
		$part_files = glob($parts_folder . '*.{php,html}', GLOB_BRACE);

		// If a specific slug is provided, look for the corresponding file
		if ($slug) {
			foreach ($part_files as $file) {
				if (strpos($file, $slug) !== false) {
					$part_content = file_get_contents($file);
					$blocks = parse_blocks($part_content);

					if ($this->has_wp_swiper_block($blocks)) {
						return true;
					}
				}
			}
		} else {
			// If no slug is provided, check all files in the /parts directory
			foreach ($part_files as $file) {
				$part_content = file_get_contents($file);
				$blocks = parse_blocks($part_content);

				if ($this->has_wp_swiper_block($blocks)) {
					return true;
				}
			}
		}

		return false;
	}
}
