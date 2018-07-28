var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStores = require('../stores/AppStores');
var Movie = require('./Movie');

var MovieResults = React.createClass({
	render: function(){
		return(
				<div className="card-group">
        	{
				this.props.movies.map(function(movie,i){
					return <Movie movie={movie} key={i} />
				})
			}
			</div>
			)
	}
});
module.exports = MovieResults;

