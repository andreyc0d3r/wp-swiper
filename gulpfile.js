const path = require('path');
const gulp = require('gulp');
const zip = require('gulp-vinyl-zip');
const del = require('del');

const pluginName = 'wp-swiper';
const zipDist = 'dist-zip';
const svnPath = '/Users/andrey/Projects/wp-swiper-svn/trunk';

// Files to include in the zip package and SVN
const packageFiles = [
    '**/*',
    // Exclude development files
    '!dist-zip/**',
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
    '!css/**', // Exclude old css directory if it exists
    '!src/**', // Source files are built into /build
    // Include built files
    'build/**/*',
];

// ============================================================
// ZIP TASKS - For manual distribution and testing
// ============================================================

gulp.task('zip:clean', () => {
    return del(`${zipDist}/**`, { force: true });
});

gulp.task('zip:copy', () => {
    return gulp
        .src(packageFiles, { base: './' })
        .pipe(gulp.dest(`${zipDist}/${pluginName}`));
});

gulp.task('zip:pack', () => {
    return gulp
        .src(`${zipDist}/**/*`, {
            nodir: true,
            base: zipDist,
        })
        .pipe(zip.dest(`${zipDist}/${pluginName}.zip`));
});

gulp.task('zip', gulp.series('zip:clean', 'zip:copy', 'zip:pack'));

// ============================================================
// SVN TASKS - For WordPress.org publishing
// ============================================================

gulp.task('svn:clean', () => {
    return del(`${svnPath}/**`, { force: true });
});

gulp.task('svn:copy', () => {
    return gulp
        .src(packageFiles, { base: './' })
        .pipe(gulp.dest(svnPath));
});

gulp.task('svn', gulp.series('svn:clean', 'svn:copy'));

// ============================================================
// DEFAULT TASK
// ============================================================

gulp.task('default', () => {
    console.log('\nAvailable tasks:');
    console.log('  gulp zip   - Create distribution zip file');
    console.log('  gulp svn   - Copy files to SVN trunk for WordPress.org');
    console.log('\n');
});
