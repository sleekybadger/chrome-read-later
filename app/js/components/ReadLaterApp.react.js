var React = require('react');
var TabsList = require('./TabsList.react');
var Controls = require('./Controls.react');
var TabsListStore = require('../stores/TabsListStore');

var getAppState = function() {
	return {
		tabs: TabsListStore.getTabs(),
		tabsNumber: TabsListStore.getUnreadTabsNumber()
	};
};

var ReadLaterApp = React.createClass({
	getInitialState: function() {
		return getAppState();
	},
	componentDidMount: function() {
		TabsListStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		TabsListStore.removeChangeListener(this._onChange);
	},
	/*jshint ignore:start */
	render: function() {
		return (
			<div>
				<Controls tabsNumber={this.state.tabsNumber} />
				<TabsList tabs={this.state.tabs} />
			</div>
		);
	},
	/*jshint ignore:end */
	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = ReadLaterApp;