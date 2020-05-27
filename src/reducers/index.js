import { combineReducers } from 'redux';
import todos from './todos';

const reducer = combineReducers({
    todos
    //visibilityFilter
  });

export default reducer;