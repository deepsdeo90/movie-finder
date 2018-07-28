var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events');
var assign = require('object-assign');
var AppAPI = require('../utills/appAPI.js');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({},EventEmitter.prototype, {
	setMovieResults: function(movies){
		_movies : movies
	},
	getMovieResults: function(){
		return _movies;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}
}); 

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case AppConstants.SEARCH_MOVIES:
			 //console.log(action.movie.title);
			 AppAPI.searchMovies(action.movie);
			 AppStore.emit(CHANGE_EVENT);
			 break;
		case AppConstants.RECIVE_MOVIES_RESULTS:
			 //console.log(action.movies);
			 AppStore.setMovieResults(action.movies);	
			 AppStore.emit(CHANGE_EVENT);
			 break;
			

	}
	return true;
});
module.exports = AppStore;