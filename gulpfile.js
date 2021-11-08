const gulp = require('gulp');

const $ = require('gulp-load-plugins')({DEBUG: false});
var gutil = require('gulp-util');

var zip = require('gulp-vinyl-zip');
var rename = require('gulp-rename');

var path = require('path');

var del = require('del');
var sass = require('gulp-sass');

const syncy = require('syncy');

var settings = {
    repo_path: './src',
    dist_path: '../dist',
    zip_path: '../zip',
    svn_path: '../svn',
    mac_dest:
        '/Users/andrey/Dev/server/wp-swiper/www/app/public/wp-content/plugins/wp-swiper',
    win_dest: 'H:/dev/server/wordpress/wp/app/public/wp-content/plugins/wp-swiper',
};

/**
 * Error Handler for gulp-plumber
 */
function errorHandler(err) {
    console.error(err);
    this.emit('end');
}

// task: package to zip
// https://stackoverflow.com/questions/39029238/exclude-all-files-in-any-directory-named-node-module-with-gulp
gulp.task('package', function (done) {
    gulp.src([
        settings.repo_path + '/**/*',
        '!**/node_modules/**',
        '!*.scss',
        '!**/*.lnk',
        '!**/package.json',
        '!**/package-lock.json',
        '!**/webpack.config.js',
        '!**/style/components',
    ])
        .pipe(
            rename(function (file) {
                file.dirname = 'astheme' + path.sep + file.dirname;
            })
        )
        .pipe(zip.dest('astheme.zip'))
        .pipe(gulp.dest(settings.dist_path))
        .on('error', gutil.log);
    done();
});

// task: clean old files
gulp.task('clean:build', function (done) {
    del(settings.dist_path + '/**', { force: true }); // remove old zip file
    done();
});

gulp.task('sync_dist', function (done) {
    gulp.src([
        // settings.repo_path + '/**/*',
        settings.repo_path + '/**/*',
        // '**/(admin_block|frontend_block).js',
        '!**/gutenberg/**',
        settings.repo_path +
            '/**/gutenberg/**/!(js){admin_block,frontend_block}.js',
        '!**/node_modules/**',
        '!**/*.scss',
        '!**/*.lnk',
        '!**/*.dev.js',
        '!**/package.json',
        '!**/package-lock.json',
        '!**/webpack.config.js',
        '!**/style/components',
    ])
        .pipe(gulp.dest(settings.dist_path))
        .on('error', gutil.log);
    done();
});

// task: clean without images
gulp.task('clean:dev', function (done) {
    del([settings.themes[1].adsense_theme + '/**/*'], { force: true });
    done();
});

// ------------------------------------------------------------
// Shared
gulp.task('build_scss:prod', function (done) {
    gulp.src([settings.repo_path + '/style/style.scss'])
        .pipe($.plumber({ errorHandler }))
        .pipe(
            sass({
                outputStyle: 'compressed',
            }).on('error', sass.logError)
        )
        .pipe(
            $.autoprefixer({
                autoprefixer: {
                    browsers: ['last 4 version', '> 1%'],
                },
            })
        )
        .pipe(
            $.rename({
                suffix: '.min',
            })
        )
        .pipe(gulp.dest(settings.repo_path + '/style'));
    done();
});

gulp.task('build_scss:ext', function (done) {
    gulp.src([
        settings.repo_path + '/theme/includes/extensions/**/css/*.scss',
        '!' + settings.repo_path + '/**/node_modules/**',
    ])
        .pipe($.plumber({ errorHandler }))
        .pipe(
            sass({
                outputStyle: 'compressed',
            }).on('error', sass.logError)
        )
        .pipe(
            $.autoprefixer({
                autoprefixer: {
                    browsers: ['last 4 version', '> 1%'],
                },
            })
        )
        // .pipe($.rename({
        //     suffix: '.min'
        // }))
        .pipe(gulp.dest(settings.repo_path + '/theme/includes/extensions'));
    done();
});

// https://fizzy.cc/gulp-theme-workflow/
gulp.task('build_scss:dev', function (done) {
    gulp.src([settings.repo_path + '/style/style.scss'])
        .pipe($.plumber({ errorHandler }))
        .pipe(
            sass({
                outputStyle: 'expanded',
            }).on('error', sass.logError)
        )
        .pipe(
            $.autoprefixer({
                autoprefixer: {
                    browsers: ['last 4 version', '> 1%'],
                },
            })
        )
        .pipe(
            $.rename({
                suffix: '.min',
            })
        )
        .pipe(gulp.dest(settings.repo_path + '/style'));
    done();
});

// ------------------------------------------------------------
// ADMIN SASS
// .scss
// WIN + MAC
// ------------------------------------------------------------
gulp.task('admin_build_scss:prod', function (done) {
    gulp.src([
        settings.repo_path + '/**/*/*.scss',
        '!' + settings.repo_path + '/**/node_modules/**',
    ])
        .pipe($.plumber({ errorHandler }))
        .pipe(
            sass({
                outputStyle: 'compressed',
            }).on('error', sass.logError)
        )
        .pipe(
            $.autoprefixer({
                autoprefixer: {
                    browsers: ['last 4 version', '> 1%'],
                },
            })
        )
        .pipe(gulp.dest(settings.repo_path));
    done();
});

// ------------------------------------------------------------

// ------------------------------------------------------------
// WINDOWS
// ------------------------------------------------------------
gulp.task('zip', function () {
    // gulp.src( settings.dist_path + '/**/*/*.js' )
    //     .pipe(uglify())
    //     .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    //     .pipe( gulp.dest(settings.dist_path ))
    //     .on('error', gutil.log);
    return (
        gulp
            .src(settings.dist_path + '/**/*')
            .pipe(
                rename(function (file) {
                    file.dirname = 'wp-swiper' + path.sep + file.dirname;
                })
            )
            .pipe(zip.dest(settings.zip_path + '/wp-swiper.zip'))
            // .pipe(gulp.dest(settings.release_path))
            .on('error', gutil.log)
    );
});
gulp.task('sync_dir:win', function (done) {
    syncy(
        [
            settings.repo_path + '/**',
            '!' + settings.repo_path + '/**/node_modules/**',
        ],
        settings.win_dest,
        {
            base: settings.repo_path,
        }
    )
        .then(() => {
            done();
        })
        .catch((err) => {
            done(err);
        });
});

gulp.task(
    'win',
    gulp.series(
        // 'build_scss:prod',
        // 'admin_build_scss:prod',
        // 'build_scss:ext',
        'sync_dir:win'
    )
);

gulp.task(
    'win:dist',
    gulp.series(
        'clean:build',
        // 'build_scss:prod',
        'admin_build_scss:prod',
        // 'package',
        'sync_dist'
        // 'zip'
    )
);
//gulp.task( 'windev', gulp.series( 'watchwin' ) );
// ------------------------------------------------------------

// ------------------------------------------------------------
// Mac
gulp.task('sync_dir:mac', function (done) {
    syncy(
        [
            settings.repo_path + '/**',
            '!' + settings.repo_path + '/**/node_modules/**',
        ],
        settings.mac_dest,
        {
            base: settings.repo_path,
        }
    )
        .then(() => {
            done();
        })
        .catch((err) => {
            done(err);
        });
});

gulp.task(
    'mac',
    gulp.series(
        // 'build_scss:prod',
        // 'admin_build_scss:prod',
        // 'build_scss:ext',
        'sync_dir:mac'
    )
);

// *******************************
// <SVN>
// <SVN>
// *******************************
gulp.task('sync_dir:svn', function (done) {
    gulp.src([
        // settings.repo_path + '/**/*',
        settings.repo_path + '/**/*',
        // '**/(admin_block|frontend_block).js',
        '!**/gutenberg/**',
        settings.repo_path +
            '/**/gutenberg/**/!(js){admin_block,frontend_block}.js',
        '!**/node_modules/**',
        '!**/*.scss',
        '!**/*.lnk',
        '!**/*.dev.js',
        '!**/package.json',
        '!**/package-lock.json',
        '!**/webpack.config.js',
        '!**/style/components',
    ])
        .pipe(gulp.dest(settings.svn_path + '/trunk/'))
        .on('error', gutil.log);
    done();
});
gulp.task('clean:svn', function (done) {
    del(settings.svn_path + '/trunk/**', { force: true }); // remove old zip file
    done();
});
gulp.task(
    'svn',
    gulp.series(
        'clean:svn',
        // 'admin_build_scss:prod',
        // 'build_scss:ext',
        'sync_dir:svn'
    )
);
// *******************************
// </SVN>
// </SVN>
// *******************************
