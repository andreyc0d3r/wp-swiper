const gulp      = require('gulp');
const watch     = require('gulp-watch');
const $         = require('gulp-load-plugins')();
var gutil       = require('gulp-util');
var zip         = require( 'gulp-vinyl-zip' );
var rename      = require('gulp-rename');
var path        = require('path');
var del         = require('del');
var sass        = require( 'gulp-sass');
const syncy     = require('syncy');


var settings = {
    'repo_path'     : './src',
    'dist_path'     : '../dist',
    'mac_dest'      : '/Users/andrey/www/personal/wp-swiper/www/wp-content/plugins/wp-swiper',
    'win_dest'      : 'H:/dev/server/wp-swiper/www/wp-content/plugins/wp-swiper'
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
gulp.task('package', function(done){
    gulp.src( [
        settings.repo_path + '/**/*',
        '!**/node_modules/**', 
        '!*.scss',
        '!**/*.lnk',
        '!**/package.json',
        '!**/package-lock.json',
        '!**/webpack.config.js',
        '!**/style/components'
    ] )
    .pipe(rename(function(file) {
        file.dirname = 'astheme' + path.sep + file.dirname;
    }))
    .pipe( zip.dest( 'astheme.zip' ) )
    .pipe( gulp.dest( settings.dist_path ) )
    .on('error', gutil.log);
    done();
});

// task: clean old files
gulp.task('clean:build', function(done) {
    del(settings.dist_path + '/**', {force: true}); // remove old zip file
    done();
});

gulp.task('sync_dist', function(done){
    gulp.src( [
        // settings.repo_path + '/**/*',
        settings.repo_path + '/**/*',
        // '**/(admin_block|frontend_block).js',
        '!**/gutenberg/**',
        settings.repo_path + '/**/gutenberg/**/!(js){admin_block,frontend_block}.js',
        '!**/node_modules/**',
        '!**/*.scss',
        '!**/*.lnk',
        '!**/*.dev.js',
        '!**/package.json',
        '!**/package-lock.json',
        '!**/webpack.config.js',
        '!**/style/components'
    ] )
    .pipe( gulp.dest( settings.dist_path ) )
    .on('error', gutil.log);
    done();
});




// task: clean without images
gulp.task('clean:dev', function(done){
    del([
        settings.themes[1].adsense_theme + '/**/*',
    ], { force: true });
    done();
});


// ------------------------------------------------------------
// Shared
gulp.task('build_scss:prod', function (done) {
    gulp.src([ settings.repo_path + '/style/style.scss'] )
        .pipe($.plumber({ errorHandler }))
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe($.autoprefixer({
            autoprefixer: {
                browsers: [
                    'last 4 version',
                    '> 1%'
                ]
            }
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest( settings.repo_path + '/style' ) );
        done();
});

gulp.task('build_scss:ext', function (done) {
    gulp.src(
        [ 
            settings.repo_path + '/theme/includes/extensions/**/css/*.scss',
            '!' + settings.repo_path + '/**/node_modules/**'
        ] )
        .pipe($.plumber({ errorHandler }))
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe($.autoprefixer({
            autoprefixer: {
                browsers: [
                    'last 4 version',
                    '> 1%'
                ]
            }
        }))
        // .pipe($.rename({
        //     suffix: '.min'
        // }))
        .pipe( gulp.dest(
            settings.repo_path + '/theme/includes/extensions'
        ) );
        done();
});

// https://fizzy.cc/gulp-theme-workflow/
gulp.task('build_scss:dev', function (done) {
    gulp.src([ settings.repo_path + '/style/style.scss'] )
        .pipe($.plumber({ errorHandler }))
        .pipe(sass({
            outputStyle: 'expanded'
        })
        .on('error', sass.logError))
        .pipe($.autoprefixer({
            autoprefixer: {
                browsers: [
                    'last 4 version',
                    '> 1%'
                ]
            }
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe( gulp.dest( settings.repo_path + '/style' ) );
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
        '!' + settings.repo_path + '/**/node_modules/**'
        
    ] )
        .pipe($.plumber({ errorHandler }))
        .pipe(sass({
            outputStyle: 'compressed'
        })
        .on('error', sass.logError))
        .pipe($.autoprefixer({
            autoprefixer: {
                browsers: [
                    'last 4 version',
                    '> 1%'
                ]
            }
        }))
        .pipe(gulp.dest( settings.repo_path ) );
        done();
});

// ------------------------------------------------------------

// ------------------------------------------------------------
// WINDOWS
// ------------------------------------------------------------
gulp.task( 'sync_dir:win', function(done) {
    syncy(
        [
            settings.repo_path + '/**',
            '!' + settings.repo_path + '/**/node_modules/**'
        ], 
        settings.win_dest,
        {
            base: settings.repo_path
        }
    )
    .then(() => {
        done();
    })
    .catch((err) => {
        done(err);
    });
} );

gulp.task( 'win', gulp.series( 
    // 'build_scss:prod', 
    'admin_build_scss:prod', 
    // 'build_scss:ext', 
    'sync_dir:win' ) );

gulp.task( 'win:dist', gulp.series( 
    'clean:build',
    // 'build_scss:prod',
    'admin_build_scss:prod', 
    // 'package',
    'sync_dist'
) );
//gulp.task( 'windev', gulp.series( 'watchwin' ) );
// ------------------------------------------------------------

// ------------------------------------------------------------
// Mac
gulp.task( 'sync_dir:mac', function(done) {
    // return gulp.src([ 
    //     settings.repo_path,
    //     '!**/node_modules/**'
    // ])
    // .pipe(dirSync( 
    //     settings.repo_path, 
    //     settings.mac_dest,
    //     { 
    //         printSummary: true,
    //         ignore: ['.git', 'node_modules'] 
    //     } )
    // )
    // .on('error', gutil.log);

    // done();
    syncy(
        [
            settings.repo_path + '/**',
            '!' + settings.repo_path + '/**/node_modules/**'
        ], 
        settings.mac_dest,
        {
            base: settings.repo_path
        }
    )
    .then(() => {
        done();
    })
    .catch((err) => {
        done(err);
    });
} );

gulp.task('watchmac', function(done) {
    // var conn = getFtpConnection();
    gulp.watch( [
        settings.repo_path + '/**/*',
        '!' + settings.repo_path + '/style/style.min.css'
    ], gulp.series( 'mac' ) );
    done();
});

gulp.task( 'mac', gulp.series( 
    // 'build_scss:prod', 
    // 'admin_build_scss:prod', 
    // 'build_scss:ext', 
    'sync_dir:mac' 
) );
gulp.task( 'macdev', gulp.series( 'watchmac' ) );
// ------------------------------------------------------------







// gulp.task('build', gulp.series('clean:build', ['build_scss:prod','package']));
// // dev
// // gulp.task('dev', gulp.series('clean:dev', 'build_theme', ['build_scss:dev']));
// gulp.task('dev', gulp.series('clean:dev', 'build_theme' ));

// // gulp.task('mac', gulp.series('build_scss:mac', 'sync_dir:mac'));
// gulp.task( 'linux', gulp.series( 'build_scss:prod', 'sync_dir:linux' ) );