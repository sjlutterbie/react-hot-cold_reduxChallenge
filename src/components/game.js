import React from 'react';
import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

export class Game extends React.Component {

  restartGame() {
    this.props.dispatch(restartGame());
  }

  makeGuess(guess) {
    this.props.dispatch(
      makeGuess(guess, this.props.correctAnswer, this.props.guesses)
    );
  }

  generateAuralUpdate() {
    this.props.dispatch(
      generateAuralUpdate(this.props.guesses,this.props.feedback)
    );

  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);