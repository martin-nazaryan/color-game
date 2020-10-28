import {SET_STEP} from '../types';

export const step = (state = 0, action) => {
  switch (action.type) {
    case SET_STEP:
      return action.payload;
    default:
      return state;
  }
};