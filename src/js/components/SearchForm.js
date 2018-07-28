var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStores = require('../stores/AppStores');

var SearchForm = React.createClass({
	render: function(){
		return(
			<div className="search-form card bg-light mb-3 text-center">
			<div  className="card-body">
				<h1>Search for a Movie</h1>
				<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<input className="form-control" type="text" placeholder="Enter a Movie Title..." ref="title" />
				</div>
				<button className="btn btn-primary btn-lg" >Search Movies</button>
				</form>
			</div>
			</div>
			)
	},
	onSubmit:function(e){
		e.preventDefault();
		var movie = {
			title:this.refs.title.value.trim()
		}
		AppActions.searchMovies(movie);
	}
});
module.exports = SearchForm;

