var gulp = require('gulp'),
  connect = require('gulp-connect'),
  runSequence = require('run-sequence');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('reload', function(callback) {
  runSequence('build', 'resources', callback);
});

gulp.task('resources', function() {
  gulp.src('./build/*.**')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.**'], ['reload']);
});
