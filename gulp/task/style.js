var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    auotprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    mixin = require('postcss-mixins');

gulp.task('style', function () {
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssimport, mixin, cssvar, nested, auotprefixer]))
        .on('error', function (errorinfo) {
            console.log(errorinfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
