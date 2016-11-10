var gulp = require('gulp'); 
var path = require('path');
var sass = require('gulp-sass');
var minify_css = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var paths = {
    sass: path.resolve('./sass'),
    css: path.resolve('./css')
};

gulp.task('sass', function() {
return gulp.src( [paths.sass+'/**/*.scss'] )
  .pipe( sass() )
  .pipe( concat('all.css') )
  .pipe( minify_css() )
  .pipe( rename('style.min.css') )
  .pipe( gulp.dest(paths.css) );
});

gulp.task('watch', ['sass'], function () {
gulp.watch(paths.sass+'/**/*.scss', ['sass']);
});

gulp.task( 'default', ['watch'] );