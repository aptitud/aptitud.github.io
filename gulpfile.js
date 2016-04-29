var gulp = require('gulp'),
  requireDir = require('require-dir'),
  connect = require('gulp-connect'),
  runSequence = require('run-sequence'),
  sass = require('gulp-sass');

gulp.task('default', ['connect', 'watch']);

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('reload', function(callback) {
  runSequence('sass', 'resources', callback);
});

gulp.task('resources', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['index.html', './src/**/*.**'], ['reload']);
});
