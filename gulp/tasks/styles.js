var gulp = require('gulp'),
	config = require('../config').styles,
	minifyCss = require('gulp-minify-css'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	errorHandler = require('../utils/errorHandler');

gulp.task('styles', function() {
	gulp
		.src(config.entries)
		.pipe(sourcemaps.init())
		.pipe(less())
		.on('error', errorHandler)
		.pipe(minifyCss())
		.pipe(sourcemaps.write())
		.pipe(rename(config.name))
		.pipe(gulp.dest(config.dest));
});