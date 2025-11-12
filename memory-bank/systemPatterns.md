# System Patterns: WP Swiper

## System Architecture

### High-Level Structure
```
WP Swiper Plugin
├── WordPress Integration Layer (PHP)
│   ├── Plugin Bootstrap (wp-swiper.php)
│   ├── Core Plugin Class (class-wp-swiper.php)
│   ├── Admin Interface (class-wp-swiper-admin.php)
│   ├── Public Interface (class-wp-swiper-public.php)
│   └── Support Classes (activator, deactivator, loader, settings)
├── Block System (PHP + JavaScript)
│   ├── Block Registration (class-wp-swiper-block-registration.php)
│   ├── Block Renderer (class-wp-swiper-renderer.php)
│   └── Block Detector (class-wp-swiper-block-detector.php)
└── Gutenberg Blocks (JavaScript/React)
    ├── Slides Block (Parent Container)
    └── Slide Block (Individual Slide)
```

### Plugin File Organization
```
wp-swiper/
├── wp-swiper.php              # Bootstrap file
├── includes/                  # Core PHP classes
│   ├── class-wp-swiper.php                    # Main plugin class
│   ├── class-wp-swiper-loader.php             # Hook loader
│   ├── class-wp-swiper-admin.php              # Admin functionality
│   ├── class-wp-swiper-public.php             # Frontend functionality
│   ├── class-wp-swiper-block-registration.php # Modern block system
│   ├── class-wp-swiper-renderer.php           # Block rendering
│   ├── class-wp-swiper-block-detector.php     # Block detection
│   ├── class-wp-swiper-settings.php           # Settings API
│   ├── class-wp-swiper-activator.php          # Activation hooks
│   └── class-wp-swiper-deactivator.php        # Deactivation hooks
├── admin/                     # Admin-specific files
├── public/                    # Frontend-specific files
│   ├── css/swiper-bundle.min.css
│   └── js/swiper-bundle.min.js
├── src/                       # Source files (pre-build)
│   ├── slides/                # Parent block source
│   ├── slide/                 # Child block source
│   ├── components/            # Shared React components
│   ├── utils/                 # Shared utilities
│   └── scss/                  # Styles
└── build/                     # Compiled assets (post-build)
    ├── index.build.js         # Editor JavaScript
    ├── index.css              # Editor styles
    ├── frontend.build.js      # Frontend JavaScript
    ├── frontend.css           # Frontend styles
    ├── slides/block.json      # Slides block config
    └── slide/block.json       # Slide block config
```

## Key Technical Decisions

### 1. Block Architecture: Parent-Child Pattern
**Decision:** Use nested block structure with `da/wp-swiper-slides` as parent and `da/wp-swiper-slide` as child.

**Rationale:**
- Mirrors Swiper.js HTML structure naturally
- Enables per-slide customization while maintaining slider-level settings
- Provides clear content hierarchy in block editor
- Allows InnerBlocks for flexible slide content

**Implementation:**
```json
// slide/block.json
{
  "name": "da/wp-swiper-slide",
  "parent": ["da/wp-swiper-slides"],
  "supports": {
    "inserter": false,  // Only addable within parent
    "reusable": false   // Prevents slide reuse confusion
  }
}
```

### 2. Block Registration: block.json First
**Decision:** Use block.json as single source of truth for block configuration.

**Rationale:**
- Modern WordPress standard (Block API v2+)
- Centralized block metadata
- Better performance (server-side parsing)
- Enables future WordPress optimizations
- Clearer block capabilities

**Pattern:**
```php
// class-wp-swiper-block-registration.php
public function register_block() {
    $json = $this->read_json();
    $block_name = $json['name'];
    
    register_block_type(
        plugin_dir_path(__FILE__) . '../build/slides/',
        array('render_callback' => array($this->renderer, 'render_callback'))
    );
}
```

### 3. Asset Loading: Conditional & Dependency-Aware
**Decision:** Load assets conditionally based on block presence, with proper dependency chains.

**Rationale:**
- Performance: Only load when needed
- Maintainability: Dependencies auto-managed via build
- Compatibility: Proper WordPress script queuing
- Prevents conflicts with other plugins

**Implementation:**
- Use `build/*.asset.php` files for dependency tracking
- Check file existence before enqueuing
- Exclude admin area for frontend scripts
- Proper handle naming for dependency chains

### 4. State Management: WordPress Native
**Decision:** Use WordPress block attributes for all state, no external state libraries.

**Rationale:**
- Persistence handled by WordPress
- No additional dependencies
- Familiar to WordPress developers
- Serializes cleanly to post content
- Supports block validation

### 5. Editor Experience: Tab System for Slide Navigation
**Decision:** Custom tab interface for switching between slides in editor.

**Rationale:**
- Large sliders difficult to navigate vertically
- Visual representation of slide order
- Quick access to any slide
- Mimics common slider editing patterns
- Maintains context while editing

**Implementation:**
```javascript
// Tracked in slides block attributes
{
  "tabActive": "slide-1",  // Currently editing slide
  "currentSlide": 0,       // Index of active slide
  "tabsData": [...]        // Array of slide metadata
}
```

## Component Relationships

### Block Communication Pattern
```
Slides Block (Parent)
├── Manages: slider configuration, slide collection
├── Provides: context to children via InnerBlocks
├── Controls: tab navigation, global settings
└── Children: Slide Blocks

Slide Block (Child)
├── Manages: individual slide content, image, overlay
├── Inherits: some settings from parent (containerWidth, etc.)
├── Contains: InnerBlocks for content
└── Reports: metadata to parent (slug, images)
```

### Data Flow
```
User Action (Inspector Control)
    ↓
React State Update (setAttributes)
    ↓
Block Attribute Change
    ↓
WordPress Saves to Post Content
    ↓
PHP Render Callback (Frontend)
    ↓
HTML Output with Data Attributes
    ↓
Frontend JavaScript Reads Data
    ↓
Swiper.js Initialization
```

### Asset Dependency Chain
```
WordPress Core
    ↓
wp-element, wp-blocks, wp-components (from build/*.asset.php)
    ↓
index.build.js (Editor)
    ↓
Block Registration
    
Swiper Bundle (public/js/swiper-bundle.min.js)
    ↓
frontend.build.js
    ↓
Swiper Initialization
```

## Critical Implementation Paths

### 1. Block Registration Flow
```
Plugin Init (wp-swiper.php)
    ↓
WP_Swiper::__construct()
    ↓
WP_Swiper::init_block_registration()
    ↓
WP_Swiper_Block_Registration::__construct()
    ↓
WP_Swiper_Block_Registration::read_json()
    ↓
register_block_type() with block.json path
    ↓
Blocks Available in Editor
```

### 2. Editor Asset Loading
```
Admin Init
    ↓
WP_Swiper_Admin::register_gutenberg_block()
    ↓
Check for build/index.build.asset.php
    ↓
Extract dependencies and version
    ↓
wp_register_script('wpswiper-block-editor')
    ↓
wp_enqueue_script() with dependencies
    ↓
wp_enqueue_style() for editor CSS
    ↓
Assets Available in Block Editor
```

### 3. Frontend Rendering
```
Post/Page Render
    ↓
Block Present? (WP_Swiper_Block_Detector)
    ↓
WP_Swiper_Public::loadWpSwiper()
    ↓
Enqueue swiper-bundle.min.js
    ↓
Enqueue frontend.build.js (depends on swiper)
    ↓
Enqueue frontend.css
    ↓
Block Renders HTML with data-* attributes
    ↓
Frontend JS Reads Attributes
    ↓
new Swiper() Initialization
    ↓
Interactive Slider
```

### 4. Save/Load Cycle
```
User Edits Block
    ↓
setAttributes() Called
    ↓
Block save() Function Generates HTML
    ↓
Serialized and Stored in post_content
    ↓
Page Load
    ↓
parse_blocks() Parses HTML
    ↓
Block edit() Receives Attributes
    ↓
State Restored
```

## Design Patterns in Use

### 1. WordPress Plugin Architecture Pattern
- **Singleton-like** main plugin class
- **Hook-based** event system via WP_Swiper_Loader
- **Separation of concerns** (admin/public split)

### 2. Block Editor Patterns
- **InnerBlocks** for nested content
- **withSelect/withDispatch** for data access (if used)
- **Block Deprecation** for version migrations
- **Block Validation** for content integrity

### 3. React Patterns
- **Functional Components** for blocks
- **Hooks** (useState, useEffect) for state management
- **Component Composition** for reusable UI pieces
- **Controlled Components** for form inputs

### 4. WordPress Asset Loading
- **Dependency Declaration** via .asset.php files
- **Conditional Loading** based on context
- **Handle-based** script/style management
- **Localization** for passing PHP data to JS

## Code Conventions

### PHP Standards
- WordPress Coding Standards
- Class names: `WP_Swiper_*` (PascalCase with underscores)
- File names: `class-wp-swiper-*.php` (lowercase with hyphens)
- Hook prefix: `wpswiper_` or `dawps_`

### JavaScript Standards
- Modern ES6+ syntax
- WordPress eslint config (@wordpress/scripts)
- Component files in PascalCase
- Utility functions in camelCase

### CSS/SCSS Patterns
- BEM-like naming for custom classes
- Scoped to avoid conflicts
- Separate editor and frontend styles
- Use WordPress core styles where possible

## Performance Considerations

### 1. Conditional Asset Loading
- Check block presence before loading frontend assets
- Use `WP_Swiper_Block_Detector` to detect blocks in content
- Only load on pages that use the block

### 2. Build Optimization
- Single build command compiles all assets
- Minification via @wordpress/scripts
- Tree-shaking for unused code
- Source maps for debugging

### 3. Image Handling
- Uses WordPress media library (built-in optimization)
- Focal point for responsive cropping
- Lazy loading support in Swiper.js

### 4. JavaScript Performance
- Event delegation for slider controls
- Debounced resize handlers
- Hardware-accelerated CSS transforms
- Minimal DOM manipulation
