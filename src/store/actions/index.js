export const SET_FINISHED = 'SET_FINISHED';
export const SET_STEP = 'SET_STEP';
export const INCREMENT_STEP = 'INCREMENT_STEP';

export const setFinished = (finished) => ({
  type: SET_FINISHED,
  payload: finished
});

export const setStep = (step) => ({
  type: SET_STEP,
  payload: step
});

export const incrementStep = () => ({
  type: INCREMENT_STEP
});
