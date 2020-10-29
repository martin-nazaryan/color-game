import {INCREMENT_STEP, SET_STEP} from '../actions';

const finished = (state = 0, action) => {
  switch (action.type) {
    case SET_STEP:
      return action.payload;
    case INCREMENT_STEP:
      return state + 1;
    default:
      return state;
  }
};

export default finished;