import React, {useState} from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import {Container} from 'react-bootstrap';
import WonContainer from './components/WonContainer';

function App() {
  const [finished, setFinished] = useState(false);
  const [step, setStep] = useState(0);

  console.log(finished);

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

export default App;
