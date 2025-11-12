# Product Context: WP Swiper

## Why This Project Exists

### Problem Space
WordPress users frequently need to create image carousels, content sliders, and media galleries. While Swiper.js is one of the most popular and feature-rich JavaScript slider libraries available, integrating it into WordPress traditionally requires:
- Custom coding knowledge
- Manual HTML/CSS/JavaScript implementation
- Technical understanding of Swiper.js API
- Maintenance overhead for non-technical users

This creates a barrier for content editors and site owners who want professional slider functionality without developer intervention.

### Solution
WP Swiper bridges this gap by wrapping Swiper.js functionality into native WordPress Gutenberg blocks. Users can create sophisticated sliders using the familiar block editor interface, with all Swiper.js features accessible through visual controls.

## Problems It Solves

### For Content Editors
- **No Code Required:** Create complex sliders using point-and-click controls
- **Visual Feedback:** See slider configuration in real-time within the editor
- **Familiar Interface:** Uses native WordPress block patterns and controls
- **Flexibility:** Easy to update content, images, and settings at any time

### For Developers
- **Standardized Implementation:** Consistent Swiper.js integration across projects
- **Reduced Development Time:** No need to build custom slider implementations
- **Maintainability:** Updates managed through WordPress plugin system
- **Extensibility:** Built on WordPress block architecture for customization

### For Site Owners
- **Cost Savings:** Reduces need for custom development
- **Independence:** Less reliance on developers for content updates
- **Professional Results:** Access to industry-standard slider functionality
- **Future-Proof:** Built on modern WordPress block standards

## How It Should Work

### User Experience Flow

#### Creating a Slider (Editor)
1. User adds "WP Swiper Slides" block to page/post
2. Block automatically creates two default slides
3. User configures global slider settings in inspector panel:
   - Choose transition effect (slide, fade, cube, etc.)
   - Set autoplay and timing
   - Enable/disable navigation and pagination
   - Configure responsive behavior
4. User selects individual slides to:
   - Upload background images
   - Set focal points for image positioning
   - Add overlay colors and adjust opacity
   - Add content blocks (text, buttons, etc.)
   - Align content within slide
5. User can add/remove/reorder slides as needed
6. User publishes and slider appears on frontend

#### Viewing a Slider (Frontend)
1. Slider renders with all configured settings active
2. Navigation arrows appear (if enabled)
3. Pagination dots display (if enabled)
4. Autoplay begins (if enabled)
5. User can interact with controls
6. Slider responds to touch/swipe on mobile devices
7. Respects responsive breakpoints

### Key Interactions

#### In Editor
- **Tab System:** Visual tabs for switching between slides during editing
- **Inspector Controls:** All Swiper options accessible in sidebar
- **Real-time Preview:** Changes reflect immediately in editor
- **Nested Blocks:** Slides act as containers for any WordPress blocks
- **Image Controls:** Media library integration with focal point picker

#### On Frontend
- **Smooth Transitions:** Hardware-accelerated animations
- **Touch Support:** Native swipe gestures on mobile
- **Keyboard Navigation:** Arrow keys for accessibility
- **Lazy Loading:** Images load as needed for performance
- **Responsive:** Adapts to different screen sizes

## User Experience Goals

### Primary Goals
1. **Intuitive:** Anyone familiar with WordPress editor can create sliders
2. **Powerful:** Access to professional-grade slider features
3. **Performant:** Fast loading, smooth animations
4. **Accessible:** Works with keyboard, screen readers, touch
5. **Reliable:** Consistent behavior across devices and browsers

### Design Principles
- **Progressive Disclosure:** Basic features visible, advanced features available
- **Sensible Defaults:** Works well out-of-box, customizable when needed
- **Visual Clarity:** Clear labeling and organization of controls
- **Consistency:** Follows WordPress UI patterns and conventions
- **Feedback:** Users understand what each setting does

### Success Metrics
- Slider creates successfully on first attempt
- Settings are discoverable without documentation
- Frontend output matches editor expectations
- No technical knowledge required for basic use
- Advanced features accessible when needed

## Expected Behavior

### Editor Behavior
- Blocks validate correctly on save/load
- Changes save properly to post content
- Block deprecation handled for version updates
- No conflicts with other blocks
- Performs well with multiple sliders on one page

### Frontend Behavior
- Swiper.js initializes correctly
- All configured options apply properly
- Assets load only when block is present
- No JavaScript console errors
- Works across major browsers (Chrome, Firefox, Safari, Edge)
- Responsive on all device sizes
- Degrades gracefully if JavaScript disabled

### Performance Expectations
- Editor loads quickly even with many slides
- Frontend renders without blocking page load
- Images optimize appropriately
- JavaScript bundle size kept minimal
- CSS scoped to avoid conflicts
