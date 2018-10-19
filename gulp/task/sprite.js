var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            render: {
                css: true
            }
        }
    }
}

gulp.task('createSprite', function () {
    return gulp.src('../../app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('../../app/temp/sprite/'))
});

gulp.task('copySpriteCss', ['createSprite'], function () {
    return gulp.src('../../app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('../../app/assets/styles/modules'))
});

gulp.task('icons', ['createSprite', 'copySpriteCss']);
