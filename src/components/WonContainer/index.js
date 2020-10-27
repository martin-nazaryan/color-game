import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Step from '../Steps';

function WonContainer({setFinished, setStep, step}) {
  const handlePlayAgain = () => {
    setFinished(false);
    setStep(0);
  };

  return (
    <Card bg="warning">
      <Card.Body>
        <Card.Title className="h1"><h1>Congratulations, You Won!</h1></Card.Title>
        <Card.Text>
          <Step step={step}/>
        </Card.Text>
        <Button variant="info" onClick={handlePlayAgain}>Play Again</Button>
      </Card.Body>
    </Card>
  );
}

export default WonContainer;
