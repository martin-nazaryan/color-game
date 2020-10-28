import {combineReducers} from 'redux';
import {finished} from './finishedReducer';
import {step} from './stepReducer';

export default combineReducers({
  finished,
  step
});