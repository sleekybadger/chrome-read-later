var fs = require('fs');

// run tasks from ./gulp/tasks
(function(tasksDir) {
	var walk = function(dir) {
		var files = fs.readdirSync(dir);

		files.forEach(function(file) {
			var pattern = /.js$/,
				filePath = dir + '/' + file;

			if (pattern.test(filePath)) {
				require(filePath);
			}
		});
	};

	walk(tasksDir);
})('./gulp/tasks');