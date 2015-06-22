var React = require('react');
var ReadLaterActions = require('../actions/ReadLaterActions');
var ChromeService = require('../services/ChromeService');

var TabsList = React.createClass({
	toogleReadStatus: function(tab) {
		ReadLaterActions.toogleReadStatus(tab);
	},

	openTab: function(tab) {
		ChromeService.openTab(tab);
	},
	/*jshint ignore:start */
	render: function() {
		var self = this;

		var emptyList;
		if (!self.props.tabs.length) {
			emptyList = <li className="empty">Try to add tabs, for later reading</li>
		}

		return (
			<ul className="tabs-list">
				<li className="captions cf">
					<div className="caption number">#</div>
					<div className="caption title">Title</div>
					<div className="caption actions">Actions</div>
				</li>

				{this.props.tabs.map(function(tab, indx) {
					var rowClasses = 'cf row';
					if (tab.isRead) {
						rowClasses += ' read';
					}

					return (
						<li key={indx} className={rowClasses}>
							<div className="number">
								{indx + 1}
							</div>

							<div className="title" onClick={self.openTab.bind(self, tab)}>
								{tab.title}
							</div>

							<div className="actions">
								<span className="done-button" onClick={self.toogleReadStatus.bind(self, tab)}></span>
							</div>
						</li>
					);
				})}

				{emptyList}
			</ul>
		);
	}
	/*jshint ignore:end */
});

module.exports = TabsList;