import { combineReducers } from 'redux';
import MovieReducer from './reducer_shows';

const rootReducer = combineReducers({
  movie: MovieReducer
});

export default rootReducer;
