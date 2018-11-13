// REDUCER

import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotOrColdReducer = (state=initialState, action) => {
  
  if (action.type === actions.RESTART_GAME) {
    return initialState;
  }
  
  else if (action.type === actions.MAKE_GUESS) {
    // Something happens
  }
  
  else if (action.type === actions.GEN_AURAL_UPDATE) {
    // Something happens
  }

  return state;
};