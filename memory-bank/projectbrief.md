# Project Brief: WP Swiper

## Project Identity
**Name:** WP Swiper  
**Version:** 1.3.0  
**Type:** WordPress Gutenberg Plugin  
**Author:** Digital Apps  
**Repository:** git@gitlab.com:andreyc0d3r-group/WPSwiper.git

## Core Purpose
Create a WordPress plugin that integrates Swiper.js (v11.1.14) as native Gutenberg blocks, enabling content editors to build responsive, feature-rich carousels and sliders directly in the WordPress block editor.

## Primary Goals
1. Provide an intuitive Gutenberg block interface for creating Swiper.js carousels
2. Support all major Swiper.js features through WordPress block controls
3. Maintain compatibility with WordPress core (tested up to 6.8.2)
4. Enable both simple and complex slider configurations without code
5. Deliver performant, production-ready slider implementations

## Key Requirements

### Functional Requirements
- **Two-Block System:**
  - Parent block: `da/wp-swiper-slides` (container/carousel)
  - Child block: `da/wp-swiper-slide` (individual slides)
- **Swiper Features Support:**
  - Multiple transition effects (slide, fade, cube, etc.)
  - Autoplay with customizable delay
  - Navigation arrows (customizable icons)
  - Pagination (clickable option)
  - Thumbnails support
  - Loop mode
  - Free mode
  - Responsive breakpoints
  - Variable slides per view
  - Custom spacing between slides
- **Visual Controls:**
  - Background images with focal point control
  - Overlay colors with opacity
  - Content alignment (vertical & horizontal)
  - Container width customization
  - Text color options

### Technical Requirements
- WordPress 5.0+ compatibility
- Modern block development using block.json
- Asset optimization with proper dependency management
- Server-side and client-side rendering support
- Clean, maintainable PHP and JavaScript code
- Build process using @wordpress/scripts

## Success Criteria
1. Blocks register correctly in Gutenberg editor
2. All Swiper.js features accessible through block controls
3. Sliders render correctly on frontend
4. No JavaScript errors or conflicts
5. Assets load efficiently (only when needed)
6. Settings persist correctly in WordPress database
7. Compatible with WordPress theme system

## Constraints
- Must follow WordPress coding standards
- Must be compatible with standard WordPress hosting
- Should work with any properly coded WordPress theme
- Must not conflict with other plugins
- License: GPL-2.0+

## Distribution
- WordPress.org plugin repository
- Custom plugin URI: https://digitalapps.com/wp-swiper/

## Target Users
- Content editors who need sliders without coding
- Web developers building WordPress sites
- Marketing teams creating promotional content
- WordPress site owners needing carousel functionality
