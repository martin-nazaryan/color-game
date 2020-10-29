import {combineReducers} from 'redux';
import finishedReducer from './finishedReducer';
import stepReducer from './stepReducer';

export default combineReducers({
  finished: finishedReducer,
  step: stepReducer,
});