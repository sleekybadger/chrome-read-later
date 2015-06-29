var gulp = require('gulp'),
	clean = require('gulp-clean'),
	config = require('../config').clean;

gulp.task('clean', function() {
	return gulp
		.src(config.src, {read: false})
        .pipe(clean({force: true}));
});