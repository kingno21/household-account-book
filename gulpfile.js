var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var using = require('gulp-using');
var plumber = require('gulp-plumber');
var react = require('gulp-react');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

gulp.task('webserver', function() {
  gulp.src('www').pipe(
    webserver({
      livereload: true,
      open: true,
      port: 3000,
    }),
  );
});

gulp.task('bundle', function() {
  browserify({
    entries: ['src/javascripts/app.jsx'],
    extensions: ['.js', '.jsx'],
    debug: true,
  })
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .on('error', error => {
      console.error(error);
    })
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(plumber())
    .pipe(using())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('www/dist/js'));
});

gulp.task('watch', ['webserver'], function() {
  gulp.watch(['src/javascripts/**/*.jsx'], ['bundle']);
});

gulp.task('default', ['watch', 'bundle']);
