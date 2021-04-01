import { combineReducers } from 'redux';

// import individual reducers
import info from './info';
import userReducer from './user';

// combine all reducers
export default combineReducers({
  info,
  user: userReducer,
});