# WP Swiper Plugin - Structure Reorganization (2025)

## Overview

The WP Swiper plugin has been reorganized to improve maintainability, scalability, and code organization. This document outlines the new structure and the changes made.

## New Directory Structure

```
wp-swiper/
├── assets/
│   └── swiper/                    # Swiper library assets
│       ├── swiper-bundle.min.css
│       └── swiper-bundle.min.js
├── build/                         # Compiled/built files
│   ├── blocks/
│   │   ├── slide/
│   │   └── slides/
│   ├── frontend.build.js
│   ├── frontend.css
│   ├── index.build.js
│   └── index.css
├── includes/
│   ├── admin/                     # Admin-specific functionality
│   │   ├── class-wp-swiper-admin.php
│   │   └── class-wp-swiper-settings.php
│   ├── blocks/                    # Block-related functionality
│   │   ├── class-wp-swiper-block-detector.php
│   │   ├── class-wp-swiper-block-registration.php
│   │   └── class-wp-swiper-renderer.php
│   ├── core/                      # Core plugin functionality
│   │   ├── class-wp-swiper.php
│   │   ├── class-wp-swiper-loader.php
│   │   ├── class-wp-swiper-activator.php
│   │   └── class-wp-swiper-deactivator.php
│   └── public/                    # Public-facing functionality
│       └── class-wp-swiper-public.php
├── memory-bank/                   # Project documentation
│   ├── activeContext.md
│   ├── productContext.md
│   ├── progress.md
│   ├── projectbrief.md
│   ├── systemPatterns.md
│   └── techContext.md
├── src/
│   ├── blocks/                    # Block source files
│   │   ├── slide/
│   │   │   ├── block.json
│   │   │   ├── deprecated.js
│   │   │   ├── edit.js
│   │   │   ├── index.js
│   │   │   ├── save.js
│   │   │   └── save1033.js
│   │   └── slides/
│   │       ├── block.json
│   │       ├── deprecated.js
│   │       ├── edit.js
│   │       ├── index.js
│   │       ├── oldsave.js
│   │       └── save.js
│   ├── components/                # Reusable React components
│   │   ├── block-alignment-matrix-control/
│   │   └── remove-button/
│   ├── styles/                    # SCSS files
│   │   ├── editor.scss
│   │   └── frontend.scss
│   ├── utils/                     # Utility functions
│   │   ├── shared.js
│   │   ├── get-image/
│   │   └── get-unique-slug/
│   ├── frontend.js               # Frontend entry point
│   └── index.js                  # Editor entry point
├── uninstall.php
├── wp-swiper.php                 # Main plugin file
├── package.json
├── webpack.config.js
└── README.md
```

## Key Changes

### 1. **PHP File Organization**

**Old Structure:**
- `admin/` - Admin files
- `includes/` - Mixed core and feature files
- `public/` - Public files

**New Structure:**
- `includes/admin/` - Admin-specific functionality
- `includes/blocks/` - Block-related functionality
- `includes/core/` - Core plugin functionality
- `includes/public/` - Public-facing functionality

### 2. **Asset Organization**

**Old Structure:**
- `public/css/swiper-bundle.min.css`
- `public/js/swiper-bundle.min.js`

**New Structure:**
- `assets/swiper/swiper-bundle.min.css`
- `assets/swiper/swiper-bundle.min.js`

### 3. **Source File Organization**

**Old Structure:**
- `src/slide/` - Slide block
- `src/slides/` - Slides block
- `src/scss/` - Styles
- `src/components/` - Components
- `src/utils/` - Utilities

**New Structure:**
- `src/blocks/slide/` - Slide block
- `src/blocks/slides/` - Slides block
- `src/styles/` - SCSS files
- `src/components/` - Reusable components
- `src/utils/` - Utility functions

## Files Updated

### Bootstrap File
- `wp-swiper.php` - Updated paths to core classes

### Core Classes
- `includes/core/class-wp-swiper.php` - Updated dependency paths

### Public Classes
- `includes/public/class-wp-swiper-public.php` - Updated asset paths

### Source Files
All block files updated with corrected import paths:
- `src/blocks/slide/edit.js`
- `src/blocks/slide/save.js`
- `src/blocks/slide/save1033.js`
- `src/blocks/slides/edit.js`
- `src/frontend.js`
- `src/index.js`

## Benefits of New Structure

1. **Better Organization**: Files are grouped by functionality rather than mixed together
2. **Improved Maintainability**: Clear separation of concerns makes it easier to find and modify code
3. **Scalability**: New features can be added to appropriate directories without cluttering
4. **Clarity**: Directory names clearly indicate their purpose
5. **Standard WordPress Plugin Structure**: Follows WordPress plugin development best practices

## Migration Notes

- All old directories (`admin/`, `public/css/`, `public/js/`) have been removed
- Import paths in JavaScript files have been updated to reflect new structure
- PHP class autoloading paths have been updated
- Asset URLs have been updated in public-facing classes
- Build process remains the same (`npm run build`)

## Testing Recommendations

1. Test block editor functionality
2. Verify frontend slider rendering
3. Check admin settings pages
4. Test plugin activation/deactivation
5. Verify asset loading (CSS/JS)
6. Test all block variations and settings

## Date of Reorganization
April 10, 2025
