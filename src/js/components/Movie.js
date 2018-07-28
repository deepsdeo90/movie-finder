var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStores = require('../stores/AppStores');

var Movie = React.createClass({
	render: function(){
		var link = "https://www.imdb.com/title/"+this.props.movie.imdbID;
		return(
		<div className="">
          <div className="card movie">
		    <img className="card-img-top" src={this.props.movie.Poster} alt="Card image cap" />
		    <div className="card-body">
		      <h5 className="card-title">{this.props.movie.Title}</h5>
		      <p className="card-text">
		      	<ul className="list-group list-group-flush">
			    <li className="list-group-item">Year: {this.props.movie.Year} </li>
			    <li className="list-group-item"><a href={link} target="_blank">visit IMDB Link </a></li>
			  </ul>
		      </p>
		    </div>
		    
		  </div>
        </div>
      
	)
	}
});
module.exports = Movie;

