const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const rename = require('gulp-rename');


gulp.task('responsive', function () {
  return gulp.src('public/images_src/*.{jpg,png}')
    .pipe(responsive({
      '*.jpg': [{
        width: 375,
        rename: { suffix: '_small', extname: '.webp', },
      }, {
        width: 480,
        rename: { suffix: '_medium', extname: '.webp', },
      }, {
        width: 800,
        rename: { suffix: '_large', extname: '.webp', },
      }, {
        rename: { suffix: '_original', extname: '.webp',},
      }]
    }, {
      quality: 70,

      progressive: true,

      withMetadata: false,
    }))
    .pipe(gulp.dest('public/images/gulp'));
});