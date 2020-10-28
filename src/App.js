import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import {Container} from 'react-bootstrap';
import WonContainer from './components/WonContainer';
import {connect} from 'react-redux';
import {setFinished, setStep} from './store/actions';
import {bindActionCreators} from 'redux';

function App({finished, step, setFinished, setStep, dispatch}) {
  const incrementStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="App h-100 bg-info">
      <Container className="d-flex align-items-center justify-content-center h-100">
        {finished ? (
          <WonContainer setFinished={setFinished} setStep={setStep} step={step}/>
        ) : (
          <GameContainer step={step} incrementStep={incrementStep} setFinished={setFinished}/>
        )}
      </Container>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  finished: state.finished,
  step: state.step
});


const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    setStep,
    setFinished
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
