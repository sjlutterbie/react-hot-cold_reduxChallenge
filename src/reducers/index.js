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
    return Object.assign({}, state, 
      makeGuess(action.guess, action.correctAnswer, action.guesses));
  }
  
  else if (action.type === actions.GEN_AURAL_UPDATE) {
    // Something happens
  }

  return state;
};

// Helper functions

export function makeGuess(guess, correctAnswer, guesses) {
  // Evaluates guess vs. answer, and returns an object that updates the
  //  app state, accordingly.
  
  const stateUpdate = {};
  
  guess = parseInt(guess, 10);
  if (isNaN(guess)) {
    stateUpdate.feedback = 'Please enter a valid number';
    return stateUpdate;
  }
  
  const difference = Math.abs(guess - correctAnswer);
  
  if (difference > 50) {
    stateUpdate.feedback = 'You\re Ice Cold...';
  } else if (difference >= 30) {
    stateUpdate.feedback = 'You\re Cold...';
  } else if (difference >= 10) {
    stateUpdate.feedback = 'You\'re Warm...';
  } else if (difference >= 1) {
    stateUpdate.feedback = 'You\'re Hot!';
  } else {
    stateUpdate.feedback = 'You got it!';
  }
  
  stateUpdate.guesses = [...guesses, guess];
  
  // We typically wouldn't touch the DOM directly like this in React
  // but this is the best way to update the title of the page,
  // which is good for giving screen-reader users
  // instant information about the app.
  document.title = stateUpdate.feedback ?
    `${stateUpdate.feedback} | Hot or Cold` : 'Hot or Cold';
  
  return stateUpdate;
  
}