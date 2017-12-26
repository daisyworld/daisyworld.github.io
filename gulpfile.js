var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Sass

gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass({errLogToConsole: true})) // Keep running gulp even though occurred compile error
        .pipe(pleeease({
            autoprefixer: {
                browsers: ['last 2 versions']
            },
            minifier: false // minify無効
        }))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

// Imagemin


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Reload all browsers

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Task for `gulp` command

gulp.task('default',['browser-sync'], function() {
    gulp.watch('sass/*.scss',['sass']);
    gulp.watch("*.html", ['bs-reload']);
});
