var gulp = require('gulp'),
	ejs = require('gulp-ejs'),
	errorHandler = require('../utils/errorHandler'),
	config = require('../config').ejs;

var ejsTask = function(isBuild) {
	return gulp
		.src(config.src)
    	.pipe(ejs({isBuild: isBuild}))
    	.on('error', errorHandler)
    	.pipe(gulp.dest(config.dest));
};

gulp.task('ejs', function() {
	return ejsTask();
});

module.exports = ejsTask;