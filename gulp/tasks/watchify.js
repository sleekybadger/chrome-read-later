var gulp = require('gulp'),
	browserify = require('./browserify');

gulp.task('watchify', function() {
	return browserify(true);
});