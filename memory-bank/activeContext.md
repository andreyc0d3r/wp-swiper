# Active Context: WP Swiper

## Current Work Focus

### Recently Initialized
Memory Bank has just been initialized with comprehensive project documentation. This is the starting point for all future development work.

### What Was Just Done
1. Created complete Memory Bank structure with all core files
2. Documented project architecture, patterns, and technical stack
3. Established foundation for future context tracking

## Recent Changes

### Memory Bank Creation (April 10, 2025)
- **projectbrief.md**: Established project identity, goals, and requirements
- **productContext.md**: Defined user experience and product vision
- **systemPatterns.md**: Documented architecture and design patterns
- **techContext.md**: Captured technical stack and development setup
- **activeContext.md**: This file - tracks ongoing work
- **progress.md**: To be created - will track implementation status

## Next Steps

### Immediate Actions
1. Create `progress.md` to document current project status
2. Understand what features are working vs. what needs to be built
3. Begin tracking any active development tasks

### Future Development Areas
Based on INTEGRATION_SUMMARY.md, the plugin has recently integrated:
- Modern block registration system using block.json
- Improved asset loading with dependency management
- Block renderer and detector classes

### Pending Investigations
- Current state of blocks in WordPress editor
- Frontend rendering status
- Any known bugs or issues
- Performance optimization opportunities

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
