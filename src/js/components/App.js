var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStores = require('../stores/AppStores');
var SearchForm = require('./SearchForm');

function getAppState(){
	return {
		movies: AppStores.getMovieResults()
	}
}
var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){
		AppStores.addChangeListener(this._Onchange)
	},
	componentWillUnmount: function(){
		AppStores.removeChangeListener(this._Onchange)
	},
	render: function(){
		//console.log(this.state.movies);
		return(
			<div>
				<SearchForm />
			</div>
			)
	},
	_Onchange: function(){
		this.setState(getAppState());
	}
});
module.exports = App;

