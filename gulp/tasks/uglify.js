var gulp = require('gulp'),
	config = require('../config').uglify,
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	errorHandler = require('../utils/errorHandler');

gulp.task('uglify', function() {
	gulp
		.src(config.src)
		.pipe(uglify())
		.on('error', errorHandler)
		.pipe(rename(config.name))
		.pipe(gulp.dest(config.dest));
});