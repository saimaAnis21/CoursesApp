import { combineReducers } from 'redux';
import logInfoReducer from './log_info';
import coursesReducer from './courses';

const rootReducer = combineReducers({
  log_info: logInfoReducer,
  courses: coursesReducer,
});

export default rootReducer;
