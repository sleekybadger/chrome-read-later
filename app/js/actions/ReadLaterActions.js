var AppDispatcher = require('../dispatcher/AppDispatcher');
var ReadLaterConstants = require('../constants/ReadLaterConstants');

var ReadLaterActions = {
	addTab: function(data) {
		AppDispatcher.handleAction({
			actionType: ReadLaterConstants.ADD_TAB,
			data: data
		});
	},
	reaciveSavedTabs: function(data) {
		AppDispatcher.handleAction({
			actionType: ReadLaterConstants.REACIVE_SAVED_TABS,
			data: data
		});
	},
	toogleReadStatus: function(data) {
		AppDispatcher.handleAction({
			actionType: ReadLaterConstants.TOOGLE_READ_STATUS,
			data: data
		});
	},
	clearTabs: function() {
		AppDispatcher.handleAction({
			actionType: ReadLaterConstants.CLEAR_TABS
		});
	}
};

module.exports = ReadLaterActions;