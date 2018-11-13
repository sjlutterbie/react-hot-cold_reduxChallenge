// ACTIONS

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: RESTART_GAME
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess, correctAnswer, guesses) => ({
  type: MAKE_GUESS,
  guess,
  correctAnswer,
  guesses
});

export const GEN_AURAL_UPDATE = 'GEN_AURAL_UPDATE';
export const generateAuralUpdate = (guesses, feedback) => ({
  type: GEN_AURAL_UPDATE,
  guesses,
  feedback
});

