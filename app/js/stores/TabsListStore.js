var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ReadLaterConstants = require('../constants/ReadLaterConstants');
var ChromeService = require('../services/ChromeService');
var utils = require('../utils/utils.js');

var _tabs = [];

var _save = function() {
	ChromeService.saveTabs(_tabs);

	var size = TabsListStore.getUnreadTabsNumber();

	ChromeService.setBadgeText(size);
};

var _addTab = function(tab) {
	tab = utils.whatType.isArray(tab) ? tab : [tab];

	var hrefs = _tabs.map(function(t) {
		return t.href;
	});

	tab = tab.filter(function(t) {
		return hrefs.indexOf(t.href) < 0;
	});

	_tabs = _tabs.concat(tab);

	_save();
};

var _getSavedTabs = function(tabs) {
	_tabs = tabs;
};

var _toogleReadStatus = function(tab) {
	tab.isRead = !tab.isRead;

	_save();
};

var _clearTabs = function() {
	_tabs = [];

	_save();
};

var TabsListStore = utils.extend({}, EventEmitter.prototype, {
	getTabs: function() {
		return _tabs;
	},
	getUnreadTabsNumber: function() {
		return _tabs.filter(function(tab) {
			return !tab.isRead;
		}).length;
	},
	emitChange: function() {
		this.emit('change');
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case ReadLaterConstants.ADD_TAB:
			_addTab(action.data);
			break;

		case ReadLaterConstants.REACIVE_SAVED_TABS:
			_getSavedTabs(action.data);
			break;

		case ReadLaterConstants.TOOGLE_READ_STATUS:
			_toogleReadStatus(action.data);
			break;

		case ReadLaterConstants.CLEAR_TABS:
			_clearTabs();
			break;

		default:
			return true;
	}

	TabsListStore.emitChange();

	return true;
});

module.exports = TabsListStore;