var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStores = require('../stores/AppStores');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');


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
		console.log(AppStores.getMovieResults());
		if(this.state.movies == ''){
			var movieResult = '';
		}else{
			var movieResult = <MovieResults movies={this.state.movies} />
		}
		return(
			<div>
				<SearchForm />
				{movieResult}
			</div>
			)
	},
	_Onchange: function(){
		this.setState(getAppState());
	}
});
module.exports = App;

