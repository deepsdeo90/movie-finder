var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchMovies:function(movie){
		AppDispatcher.handleViewAction({
			actionType:AppConstants.SEARCH_MOVIES,
			movie:movie
		});
	},
	recieveMovieResults: function(movies){
		//console.log(movies);
			
		AppDispatcher.handleViewAction({
			actionType:AppConstants.RECIVE_MOVIES_RESULTS,
			movies:movies
		});
	}

}
module.exports = AppActions;
