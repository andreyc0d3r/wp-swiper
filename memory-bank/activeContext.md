# Active Context: WP Swiper

## Current Work Focus

### Recent Bug Fixes Completed (December 3, 2025)
Fixed critical errors in the WordPress block editor that were preventing proper block functionality.

### What Was Just Done
1. **Fixed ReferenceError: reverseDirection is not defined**
   - Issue: Variables used in autoplay logic but not destructured from attributes
   - Fixed in: `src/blocks/slides/save.js`
   - Added missing variables: `reverseDirection`, `stopOnLastSlide`, `waitForTransition`
   
2. **Fixed Block Validation Error**
   - Issue: Overlay div always output style attribute even when empty
   - Fixed in: `src/blocks/slide/save.js`
   - Changed to conditionally render style attribute only when overlayColor exists
   
3. **Rebuilt plugin** with `npm run build` to apply fixes

## Recent Changes

### Bug Fixes (December 3, 2025)
- **src/blocks/slides/save.js**: Added missing attribute destructuring for autoplay options
- **src/blocks/slide/save.js**: Implemented conditional style rendering for overlay color
- **Build**: Successfully compiled changes to production bundle

### Memory Bank Creation (Earlier)
- **projectbrief.md**: Established project identity, goals, and requirements
- **productContext.md**: Defined user experience and product vision
- **systemPatterns.md**: Documented architecture and design patterns
- **techContext.md**: Captured technical stack and development setup
- **activeContext.md**: This file - tracks ongoing work
- **progress.md**: Tracks implementation status

## Next Steps

### Immediate Actions
1. Monitor for any additional editor or frontend issues
2. Test all autoplay options (reverse direction, stop on last slide, wait for transition)
3. Verify block validation is working correctly for all slides
4. Consider testing other block attributes for similar issues

### Future Development Areas
- Continue testing block functionality in WordPress editor
- Verify frontend rendering with all Swiper.js options
- Performance optimization opportunities
- User documentation updates

### Pending Investigations
- Test all Swiper autoplay options thoroughly
- Verify no other attributes have similar missing destructuring issues
- Check deprecated.js files for consistency

## Active Decisions and Considerations

### Block Architecture
- Using parent-child block pattern (`da/wp-swiper-slides` → `da/wp-swiper-slide`)
- InnerBlocks for flexible slide content
- Tab system for slide navigation in editor

### Asset Strategy
- Conditional loading based on block presence
- Using build/*.asset.php for dependency tracking
- Separate editor and frontend bundles

### Development Environment
- Local WordPress at http://wordpress.local/
- MAMP setup at /Applications/MAMP/htdocs/
- Using npm for build process
- Gulp for optional sync/deployment

## Important Patterns and Preferences

### Code Organization
- PHP follows WordPress coding standards
- JavaScript uses modern ES6+ with React patterns
- Block configuration in block.json (single source of truth)
- Separate concerns: admin vs. public functionality

### Naming Conventions
- Block namespace: `da/wp-swiper-*`
- PHP classes: `WP_Swiper_*`
- File names: `class-wp-swiper-*.php`
- Hook prefix: `wpswiper_` or `dawps_`

### Build Process
- `npm run dev` for development (watch mode)
- `npm run build` for production
- All builds go to `build/` directory
- Source in `src/` directory

## Learnings and Project Insights

### WordPress Block Development
This project demonstrates modern WordPress block development:
- block.json as configuration source
- @wordpress/scripts for build tooling
- Proper asset dependency management
- Parent-child block relationships

### Integration Pattern
The plugin successfully integrated modern block registration while maintaining backward compatibility. The pattern shown in INTEGRATION_SUMMARY.md is a good reference for:
- Reading block.json files
- Registering blocks with render callbacks
- Managing asset dependencies
- Conditional frontend loading

### Swiper.js Integration
Key insight: The plugin wraps a complex JavaScript library (Swiper.js) in WordPress blocks, requiring careful coordination between:
- Block attributes (WordPress data)
- HTML data attributes (bridge to frontend)
- Swiper.js initialization (frontend JavaScript)

### Performance Considerations
Critical patterns:
- Only load Swiper.js on pages that use the block
- Use block detector to check post content
- Proper script dependency chains prevent loading issues
- Separate editor and frontend bundles

### Bug Fix Learnings (December 2025)

**Always Destructure Before Using**
- When adding new attributes to block.json, they must be destructured in save.js before use
- Easy to miss when attributes are nested in conditional logic
- ReferenceError in browser console is the symptom
- Check all save functions including deprecated versions

**Conditional Attribute Rendering**
- Only render HTML attributes when they have meaningful values
- Empty objects `{}` as attribute values can cause block validation errors
- Use conditional spread operator: `{...(condition && { attr: value })}`
- Change empty object `{}` to `null` when no value exists
- This prevents WordPress from detecting content mismatches

**Block Validation Pattern**
- WordPress compares saved HTML with what save function generates
- Any mismatch triggers "Block validation failed" error
- Style attributes with default/empty values are common culprits
- Always test block save/reload cycles in editor

## Context Maintenance

### When to Update This File
- Starting new feature development
- Making architectural decisions
- Discovering important patterns
- After significant changes
- When switching focus areas

### What to Track Here
- Current development focus
- Recent decisions and why they were made
- Patterns that are working well
- Things to remember for future work
- Links between different parts of the system

## Related Files
- **projectbrief.md**: Core project requirements and goals
- **systemPatterns.md**: Architecture and technical decisions
- **techContext.md**: Tools, dependencies, and setup
- **progress.md**: Implementation status and roadmap
