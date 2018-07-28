var AppActions = require('../actions/AppActions');

module.exports ={
	searchMovies: function(movie){
		$.ajax({
		  url: "http://www.omdbapi.com/?s="+movie.title+'&apikey=9810da1c',
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    //console.log(data);
   			AppActions.recieveMovieResults(data.Search)

		  }.bind(this),
		  error: function(xhr,status,err){
		  	alert(err);
		  	
		  }.bind(this)
		});

	}
}