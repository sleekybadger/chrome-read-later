var exports = {};

exports.sample = function(ar) {
	return ar[Math.floor(Math.random() * ar.length)];
};

exports.extend = function(target) {
	var sources = Array.prototype.slice.call(arguments, 1) || [];

    sources.forEach(function(source) {
        Object.getOwnPropertyNames(source).forEach(function(propName) {
            Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
    });

    return target;
};

exports.whatType = (function() {
	var _types = ['Array', 'Object', 'Number', 'String', 'Null', 'Undefined', 'Function', 'Boolean', 'Date', 'RegExp'];

	var _getType = function(elem) {
		return Object.prototype.toString.call(elem).slice(8, -1);
	};

	var whatType = function(elem) {
		if (elem !== elem) {
			return 'NaN';
		}

		return _getType(elem).toLowerCase();
	};

	// Create functions checkers for each type
	for (var i = 0; i < _types.length; i++) {
		whatType['is' + _types[i]] = (function(type) {
			return function(elem) {
				return _getType(elem) === type;
			};
		})(_types[i]);
	}

	return whatType;
})();

module.exports = exports;