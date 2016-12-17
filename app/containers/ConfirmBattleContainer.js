var React = require('react');
var ConfirmBattle = require('../components/confirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentWillMount: function(){
		
	},
	componentDidMount: function(){
		var query = this.props.location.query;
		// Fetch info from github than update state
		
	},
	componentWillReceiveProps: function() {
		
	},
	componentWillUnmount: function(){
		
	},
	render: function(){
		return (
			<ConfirmBattle
			isLoading={this.state.isLoading}
			playersInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;