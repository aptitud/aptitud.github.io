var gulp = require('gulp'),
  connect = require('gulp-connect'),
  runSequence = require('run-sequence'),
  sass = require('gulp-sass');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['index.html', './src/**/*.**'], ['reload']);
});

gulp.task('reload', function(callback) {
  runSequence('sass', 'reload-resources', callback);
});

gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('reload-resources', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});
