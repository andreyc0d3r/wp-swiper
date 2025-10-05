# WP Swiper - Build and Deployment Guide

## Overview

This document explains the build and deployment workflows for the WP Swiper plugin.

## Prerequisites

- Node.js >= 18.0
- npm (comes with Node.js)
- PHP >= 7.0
- Gulp CLI (installed globally or via npx)

## Project Structure

The plugin is organized with a git-clone-ready structure:

```
wp-swiper/
├── src/              # Source files (JS, SCSS)
├── build/            # Built/compiled files (auto-generated)
├── includes/         # PHP classes
│   ├── core/        # Core plugin classes
│   ├── blocks/      # Block registration & rendering
│   ├── admin/       # Admin functionality
│   └── public/      # Public-facing functionality
├── assets/          # Static assets (Swiper library)
├── docs/            # Documentation (this folder)
├── memory-bank/     # Project documentation
└── wp-swiper.php    # Main plugin file
```

## Development Workflow

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode (with file watcher)

```bash
npm run start
```

This runs webpack in watch mode - files will automatically rebuild when you make changes.

### 3. Build for Production

```bash
npm run build
```

This compiles and minifies all JS and CSS files into the `/build` directory.

## Distribution Workflows

### Create Distribution Zip

For manual distribution or testing:

```bash
npm run package
```

This will:
1. Build the plugin (`npm run build`)
2. Create a clean zip file at `dist-zip/wp-swiper.zip`

The zip file excludes:
- node_modules/
- memory-bank/
- docs/
- src/ (source files - only built files are included)
- Development config files (package.json, gulpfile.js, webpack.config.js, etc.)

### Publish to WordPress.org (SVN)

For publishing to the WordPress.org plugin directory:

```bash
npm run publish:svn
```

This will:
1. Build the plugin (`npm run build`)
2. Copy production-ready files to `../wp-swiper-svn/trunk/`

**Note:** Make sure the SVN repository is checked out at `../wp-swiper-svn/` before running this command.

## Manual Gulp Tasks

You can also run gulp tasks directly:

```bash
# Create distribution zip
gulp zip

# Copy to SVN trunk
gulp svn

# Show available tasks
gulp
```

## What Gets Included in Distribution

**Included:**
- `/build/` - Compiled JS and CSS
- `/includes/` - PHP classes
- `/assets/` - Static assets
- `/public/` - Public resources
- `wp-swiper.php` - Main plugin file
- `README.txt` - WordPress.org readme
- `uninstall.php` - Uninstall script
- Other necessary plugin files

**Excluded:**
- `/node_modules/` - NPM dependencies
- `/memory-bank/` - Project documentation
- `/docs/` - Development documentation
- `/src/` - Source files (only built files are included)
- `.git/` - Git repository
- Development config files

## File Ignore Patterns

The gulpfile uses the following ignore patterns:

```javascript
const packageFiles = [
    '**/*',
    '!node_modules/**',
    '!memory-bank/**',
    '!docs/**',
    '!.git/**',
    '!.gitignore',
    '!package.json',
    '!package-lock.json',
    '!gulpfile.js',
    '!webpack.config.js',
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!**/*.scss',
    '!**/*.lnk',
    '!**/*.dev.js',
    '!src/**',
    'build/**/*',  // Include built files
];
```

## Troubleshooting

### Gulp tasks fail

Make sure you have all dependencies installed:
```bash
npm install
```

### Build fails

1. Check Node.js version: `node --version` (should be >= 18.0)
2. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Zip file contains wrong files

Check the `packageFiles` array in `gulpfile.js` to verify the ignore patterns.

## Version Management

When releasing a new version:

1. Update version in `wp-swiper.php` (plugin header)
2. Update version in `README.txt` (Stable tag)
3. Update changelog in `README.txt`
4. Run `npm run build` to rebuild
5. Run `npm run package` to create distribution zip
6. Test the zip file installation
7. Run `npm run publish:svn` to copy to SVN
8. Commit and tag in SVN

## Additional Resources

- [Webpack Documentation](https://webpack.js.org/)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
