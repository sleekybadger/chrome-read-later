var Q = require('q');
var chrome = window.chrome;

var exports = {};

var _getTabs = function(query) {
	var deferred = Q.defer();

	chrome.tabs.query(query, function(tabs) {
		var out = [];

		tabs.forEach(function(tab) {
			out.push({
				title: tab.title,
				href: tab.url,
				isRead: false
			});
		});

		deferred.resolve(out);
	});

	return deferred.promise;
};

exports.getCurrentTab = function() {
	var query = {
		active: true,
		currentWindow: true
	};

	return _getTabs(query);
};

exports.getAllTabs = function() {
	var query = {
		currentWindow: true
	};

	return _getTabs(query);
};

exports.saveTabs = function(tabs) {
	tabs = tabs || [];

	tabs = tabs.filter(function(tab) {
		return !tab.isRead;
	});

	chrome.storage.local.set({tabs: tabs});
};

exports.getSavedTabs = function() {
	var deferred = Q.defer();

	chrome.storage.local.get('tabs', function(data) {
		var tabs = data.tabs || [];

		deferred.resolve(tabs);
	});

	return deferred.promise;
};

exports.clearSavedTabs = function() {
	chrome.storage.local.remove('tabs');
};

exports.openTab = function(tab) {
	chrome.tabs.create({url: tab.href});
};

exports.setBadgeText = function(text) {
	text = text ? text.toString() : '';

	chrome.browserAction.setBadgeText({text: text});
};

module.exports = exports;