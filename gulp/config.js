var src = 'app';
var dest = 'public';

module.exports = {
	styles: {
		entries: src + '/less/styles.less',
		src: src + '/less/**/*.less',
		dest: dest + '/css/',
		name: 'styles.min.css'
	},
	scripts: {
		debug: false,
		bundles: [
			{
				entries: src + '/js/app.js',
				dest: src + '/js/',
				name: 'bundle.js',
				transform: ['reactify']
			}
		]
	},
	watch: {
		styles: src + '/less/**/*.less'
	},
	uglify: {
		src: src + '/js/bundle.js',
		dest: dest + '/js/',
		name: 'app.min.js',
	}
};