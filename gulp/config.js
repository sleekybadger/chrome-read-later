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
		debug: true,
		bundles: [
			{
				entries: src + '/js/app.js',
				dest: dest + '/js/',
				name: 'bundle.js',
				transform: ['reactify']
			}
		]
	},
	watch: {
		styles: src + '/less/**/*.less',
		ejs: src + '/ejs/**/*.ejs'
	},
	uglify: {
		src: src + '/js/bundle.js',
		dest: dest + '/js/',
		name: 'app.min.js',
	},
	ejs: {
		src: src + '/ejs/**/*.ejs',
		dest: dest
	},
	clean: {
		src: dest + '/js/bundle.js'
	}
};