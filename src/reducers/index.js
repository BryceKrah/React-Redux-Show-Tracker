import { combineReducers } from 'redux';
import MovieReducer from './reducer_shows';
import ManyMoviesReducer from './reducer_all_movies';

const rootReducer = combineReducers({
  movies: MovieReducer,
  movie: ManyMoviesReducer
});

export default rootReducer;
