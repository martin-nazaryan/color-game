import React from 'react';
import './App.css';
import GameContainer from './components/GameContainer';
import {Container} from 'react-bootstrap';
import WonContainer from './components/WonContainer';
import {useSelector} from 'react-redux';

function App() {
  const finished = useSelector(state => state.finished);

  return (
    <div className="App h-100 bg-info">
      <Container className="d-flex align-items-center justify-content-center h-100">
        {finished ? (
          <WonContainer/>
        ) : (
          <GameContainer/>
        )}
      </Container>
    </div>
  );
}

export default App;
