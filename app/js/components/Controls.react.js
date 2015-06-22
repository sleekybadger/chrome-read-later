var React = require('react');
var ReadLaterActions = require('../actions/ReadLaterActions');
var utils = require('../utils/utils');
var ChromeService = require('../services/ChromeService');

var Controls = React.createClass({
	addTab: function() {
		ChromeService
			.getCurrentTab()
			.then(function(tab) {
				ReadLaterActions.addTab(tab);
			});
	},
	addAllTabs: function() {
		ChromeService
			.getAllTabs()
			.then(function(tabs) {
				ReadLaterActions.addTab(tabs);
			});
	},
	clearTabs: function() {
		ReadLaterActions.clearTabs();
	},
	/*jshint ignore:start */
	render: function() {
		return (
			<div className="controls">
				<div className="buttons-wrap">
					<span className="button" onClick={this.addTab}>add</span>
					<span className="button" onClick={this.addAllTabs}>addAll</span>
					<span className="button" onClick={this.clearTabs}>clear</span>
				</div>
			</div>
		);
	}
	/*jshint ignore:end */
});

module.exports = Controls;