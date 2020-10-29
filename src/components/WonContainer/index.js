import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFinished, setStep } from '../../store/actions';
import Step from '../Steps';

function WonContainer() {
  const step = useSelector(state => state.step);
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch(setFinished(false));
    dispatch(setStep(0));
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
