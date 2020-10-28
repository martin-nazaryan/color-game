import {SET_FINISHED, SET_STEP} from '../types';

export const setFinished = (finished) => ({
  type: SET_FINISHED,
  payload: finished
});

export const setStep = (step) => ({
  type: SET_STEP,
  payload: step
});