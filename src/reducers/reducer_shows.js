import { FETCH_MOVIES } from '../actions/index';

export default function(state = [], action) {
  switch( action.type ) {
    case FETCH_MOVIES:
      return [ action.payload.data, ...state ];
  }
  return state;
}
