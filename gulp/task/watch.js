var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });
    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['style'], function () {
    return gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});
