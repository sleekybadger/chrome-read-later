var gulp = require('gulp'),
	config = require('../config').watch;

gulp.task('watch', ['watchify'], function() {
	gulp.watch(config.styles, ['styles']);
});