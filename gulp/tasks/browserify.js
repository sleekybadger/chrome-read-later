var gulp = require('gulp'),
	browserify = require('browserify'),
	mergeStream  = require('merge-stream'),
	watchify = require('watchify'),
	streamify = require('gulp-streamify'),
	source = require('vinyl-source-stream'),
	errorHandler = require('../utils/errorHandler'),
	bundleLogger = require('../utils/bundleLogger'),
	config = require('../config').scripts;

var browserifyTask = function(isWatching) {
	var browserifyThis = function(bundleConfig) {
		var bundler = browserify({
			cache: {},
			packageCache: {},
			fullPaths: false,
			entries: bundleConfig.entries,
			debug: config.debug,
			transform: bundleConfig.transform
		});

		var bundle = function() {
			bundleLogger.start(bundleConfig.name);

			return bundler
				.bundle()
				.on('error', errorHandler)
				.pipe(source(bundleConfig.name))
				.pipe(gulp.dest(bundleConfig.dest))
				.on('end', function(callback) {
					bundleLogger.end(bundleConfig.name);
				});
		};

		if (isWatching) {
			bundler = watchify(bundler);
			bundler.on('update', bundle);
			bundleLogger.watch(bundleConfig.name);
		}

		return bundle();
	};

	return mergeStream.apply(null, config.bundles.map(browserifyThis));
};

gulp.task('browserify', function() {
	return browserifyTask();
});

module.exports = browserifyTask;