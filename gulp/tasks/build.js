var gulp = require('gulp'),
	ejs = require('./ejs');

gulp.task('build', ['uglify', 'clean'], function() {
	ejs(true);
});