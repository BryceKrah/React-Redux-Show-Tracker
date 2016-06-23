import { combineReducers } from 'redux';
import ShowReducer from './reducer_shows';

const rootReducer = combineReducers({
  shows: ShowReducer
});

export default rootReducer;
