var React = require('react');
var ReadLaterApp = require('./components/ReadLaterApp.react');
var ReadLaterActions = require('./actions/ReadLaterActions');
var ChromeService = require('./services/ChromeService');

ChromeService
	.getSavedTabs()
	.then(function(tabs) {
		ReadLaterActions.reaciveSavedTabs(tabs);
	});

/*jshint ignore:start */
React.render(
    <ReadLaterApp />,
    document.getElementById('read-later')
);
/*jshint ignore:end */