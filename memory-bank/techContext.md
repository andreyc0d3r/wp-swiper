# Technical Context: WP Swiper

## Technologies Used

### Core Stack
- **WordPress:** 5.0+ (tested up to 6.8.2)
- **PHP:** 7.0+ (WordPress minimum requirement)
- **Swiper.js:** v11.1.14 (bundled)
- **React:** 17+ (via WordPress packages)
- **Node.js:** For build process
- **npm:** Package management

### WordPress Packages
```json
{
  "@wordpress/scripts": "^26.17.0",
  "@wordpress/icons": "^9.37.0"
}
```

**Included via @wordpress/scripts:**
- `@wordpress/element` - React wrapper
- `@wordpress/blocks` - Block registration API
- `@wordpress/components` - UI components
- `@wordpress/block-editor` - Editor components (InspectorControls, InnerBlocks, etc.)
- `@wordpress/i18n` - Internationalization
- `@wordpress/data` - Data stores

### JavaScript Dependencies
```json
{
  "classnames": "^2.3.2",    // Conditional CSS classes
  "slugify": "^1.6.6",       // Generate URL-safe slugs
  "striptags": "^3.2.0"      // Strip HTML tags
}
```

### Build Tools
- **Webpack:** 5+ (via @wordpress/scripts)
- **Babel:** ES6+ transpilation
- **PostCSS:** CSS processing
- **ESLint:** Code linting
- **Sass:** CSS preprocessing

## Development Setup

### Prerequisites
```bash
# Required
Node.js (v14+)
npm (v6+)
WordPress (5.0+)
PHP (7.0+)

# Recommended
Local WordPress environment (MAMP, LocalWP, etc.)
Git for version control
Code editor (VS Code recommended)
```

### Installation Steps
```bash
# 1. Clone repository
git clone git@gitlab.com:andreyc0d3r-group/WPSwiper.git

# 2. Install dependencies
cd wp-swiper
npm install

# 3. Build assets
npm run build

# 4. For development with auto-rebuild
npm run dev

# 5. Optional: Sync with local WordPress
# Windows
npm run dev && gulp win
# macOS
npm run dev & gulp mac
```

### Local Development Environment
- **Test URL:** http://wordpress.local/
- **Plugin Path:** `/wp-content/plugins/wp-swiper/`
- **MAMP Location:** `/Applications/MAMP/htdocs/`

### Build Commands
```bash
# Development build (with watch)
npm run dev
npm start  # alias for 'dev'

# Production build (minified)
npm run build

# SVN deployment (WordPress.org)
gulp svn
```

## Technical Constraints

### WordPress Requirements
- **Minimum WP Version:** 5.0 (when Gutenberg became core)
- **PHP Version:** 7.0+ (WordPress standard)
- **Database:** MySQL 5.6+ or MariaDB 10.1+
- **Server:** Apache or Nginx with mod_rewrite

### Browser Support
Based on WordPress core support:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Plugin Constraints
- **Text Domain:** `wpswiper`
- **Plugin Namespace:** `da` (Digital Apps)
- **Block Names:** Must start with `da/wp-swiper-`
- **Hook Prefix:** `wpswiper_` or `dawps_`
- **License:** GPL-2.0+

### Performance Constraints
- **Max File Size:** Keep JavaScript bundles under 200KB
- **Load Time:** Assets should not block page render
- **Memory:** Respect WordPress memory limits (typically 256MB)
- **Database:** No custom tables (uses post_content)

## Dependencies

### Runtime Dependencies (Frontend)
```
WordPress Core
└── Swiper.js Bundle (11.1.14)
    └── frontend.build.js
        └── Swiper Initialization
```

**Files:**
- `public/js/swiper-bundle.min.js` (217KB)
- `public/css/swiper-bundle.min.css` (58KB)
- `build/frontend.build.js` (compiled)
- `build/frontend.css` (compiled)

### Editor Dependencies
```
WordPress Core
├── wp-element
├── wp-blocks
├── wp-components
├── wp-block-editor
├── wp-i18n
├── wp-data
└── @wordpress/icons
    └── index.build.js
        ├── Slides Block
        └── Slide Block
```

**Files:**
- `build/index.build.js` (main editor bundle)
- `build/index.css` (editor styles)
- Auto-loaded from `build/index.build.asset.php`

### Development Dependencies
All managed via `@wordpress/scripts`:
- Webpack configuration
- Babel presets
- ESLint rules
- PostCSS plugins
- Development server

## File Structure Details

### Source Files (`src/`)
```
src/
├── index.js                 # Entry point (registers both blocks)
├── frontend.js              # Frontend initialization
├── slides/                  # Parent block
│   ├── index.js            # Block registration
│   ├── edit.js             # Editor component
│   ├── save.js             # Save function
│   ├── deprecated.js       # Version migrations
│   └── block.json          # Block configuration
├── slide/                   # Child block
│   ├── index.js
│   ├── edit.js
│   ├── save.js
│   ├── deprecated.js
│   └── block.json
├── components/              # Shared React components
│   ├── block-alignment-matrix-control/
│   └── remove-button/
├── utils/                   # Shared utilities
│   ├── shared.js
│   ├── get-image/
│   └── get-unique-slug/
└── scss/                    # Styles
    ├── editor.scss
    └── frontend.scss
```

### Build Output (`build/`)
```
build/
├── index.build.js           # Compiled editor JS
├── index.build.asset.php    # Dependencies & version
├── index.css                # Compiled editor CSS
├── frontend.build.js        # Compiled frontend JS
├── frontend.build.asset.php
├── frontend.css             # Compiled frontend CSS
├── slides/
│   └── block.json          # Copied from src
└── slide/
    └── block.json
```

### PHP Classes (`includes/`)
```php
includes/
├── class-wp-swiper.php                    // Main controller
├── class-wp-swiper-loader.php             // Hook manager
├── class-wp-swiper-admin.php              // Admin functionality
├── class-wp-swiper-public.php             // Frontend functionality
├── class-wp-swiper-block-registration.php // Modern block registration
├── class-wp-swiper-renderer.php           // Block render callbacks
├── class-wp-swiper-block-detector.php     // Detect blocks in content
├── class-wp-swiper-settings.php           // Settings API
├── class-wp-swiper-activator.php          // Activation hooks
└── class-wp-swiper-deactivator.php        // Deactivation hooks
```

## Tool Usage Patterns

### @wordpress/scripts
The plugin uses WordPress's official build tool which provides:

**Development:**
```bash
npm run dev
# - Watches for file changes
# - Compiles JS/CSS on save
# - Generates source maps
# - Fast rebuild times
```

**Production:**
```bash
npm run build
# - Minifies JavaScript
# - Optimizes CSS
# - Tree-shakes unused code
# - Generates .asset.php files
# - Production-ready output
```

**What it handles automatically:**
- Babel transpilation (ES6+ → ES5)
- JSX compilation
- Sass → CSS compilation
- Autoprefixing CSS
- Asset optimization
- Dependency extraction
- WordPress package externalization

### Gulp (Optional)
Used for development workflow automation:
```javascript
// gulpfile.js tasks
- File watching
- Browser sync
- SVN deployment
- Platform-specific commands
```

### Webpack Configuration
Managed by @wordpress/scripts with customization via `webpack.config.js`:
```javascript
// Custom entry points
entry: {
  index: './src/index.js',      // Editor
  frontend: './src/frontend.js' // Frontend
}
```

## Version Control

### Git Setup
```bash
# Remote
origin: git@gitlab.com:andreyc0d3r-group/WPSwiper.git

# Current commit
53d50080d2bb23147d4c94ff04297c08226b95b2

# Ignored files (.gitignore)
node_modules/
build/          # Generated files
vendor/
*.log
.DS_Store
```

### Versioning Strategy
- **Plugin Version:** Defined in `wp-swiper.php` header
- **Current:** 1.3.0
- **Swiper Bundle:** 11.1.14 (const `DAWPS_BUNDLE_VERSION`)
- **npm Version:** Separate in package.json (1.0.0)

## Asset Loading Strategy

### Conditional Loading
```php
// Only load on pages with blocks
if (WP_Swiper_Block_Detector::has_block()) {
    // Enqueue assets
}
```

### Dependency Management
```php
// Auto-generated by @wordpress/scripts
$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.build.asset.php');

// Returns:
array(
    'dependencies' => ['wp-blocks', 'wp-element', ...],
    'version' => '1234567890'
);
```

### Script Handles
- `wpswiper-block-editor` - Editor JavaScript
- `wpswiper-block-editor-style` - Editor CSS
- `wpswiper-block-frontend` - Frontend JavaScript
- `wpswiper-block-frontend-style` - Frontend CSS
- `wpswiper-bundle` - Swiper.js library

## Development Workflow

### Typical Development Cycle
```bash
# 1. Start development server
npm run dev

# 2. Edit source files in src/
# 3. Changes auto-compile to build/
# 4. Refresh browser to see changes
# 5. Test in WordPress editor

# 6. Before commit
npm run build  # Production build
# Test production build
# Commit changes
```

### Testing Checklist
- [ ] Editor loads without errors
- [ ] Blocks appear in inserter
- [ ] Settings save correctly
- [ ] Frontend renders properly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Works in different themes
- [ ] Compatible with other blocks

## Common Development Paths

### Adding a New Block Attribute
1. Add to `src/slides/block.json` or `src/slide/block.json`
2. Add UI control in `edit.js`
3. Use attribute in `save.js`
4. Update frontend.js if needed
5. Rebuild: `npm run build`

### Modifying Swiper Options
1. Edit `src/frontend.js`
2. Update configuration object
3. Test in browser
4. Rebuild for production

### Styling Changes
1. Edit `src/scss/editor.scss` or `frontend.scss`
2. Auto-compiles to `build/*.css`
3. Changes visible immediately (dev mode)

### PHP Class Changes
1. Edit class in `includes/`
2. Clear WordPress object cache if needed
3. Test functionality
4. No rebuild needed (PHP only)
