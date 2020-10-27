import React, {useEffect, useRef, useState} from 'react';
import {Card} from 'react-bootstrap';
import Step from '../Steps';
import produce from 'immer';
import useWon from '../../hooks/useWon';
import useRenderData from '../../hooks/useRenderData';

const GameContainer = ({setFinished, step, incrementStep}) => {
  const maxCount = useRef(null);

  const [colorsData, setColorsData] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const renderData = useRenderData(colorsData, maxCount.current);

  const won = useWon(colorsData, selectedColor, maxCount.current);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json');
      const data = await response.json();

      maxCount.current = data.maxCount;
      setColorsData(data.colors);
    };

    fetchData();
  }, []);

  useEffect(() => {
    won && setFinished(true);
  }, [won, setFinished]);

  const handleClick = (index) => {
    const clickedColor = colorsData[index][colorsData[index].length - 1];

    if (!selectedColor) {
      const nextColors = produce(colorsData, draftColors => {
        draftColors[index].pop();
      });

      setColorsData(nextColors);
      setSelectedColor(clickedColor);
      setSelectedIndex(index);

      incrementStep();
      return;
    }

    if (colorsData[index].length < maxCount.current && (!clickedColor || selectedColor === clickedColor)) {
      const nextColors = produce(colorsData, draftColors => {
        draftColors[index].push(selectedColor);
      });

      setColorsData(nextColors);
      setSelectedColor('');
      setSelectedIndex(null);
    }
  };

  const handleUndo = () => {
    if (!selectedColor) return;

    const nextColorsData = produce(colorsData, draftColorsData => {
      draftColorsData[selectedIndex].push(selectedColor);
    });

    setColorsData(nextColorsData);
    setSelectedColor('');
  };

  return (
    <Card className="bg-warning">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Step step={step}/>
        <Card className={`my-1 color-item ${selectedColor && 'pointer'}`}
              style={{backgroundColor: selectedColor}}
              onClick={handleUndo}
              body
        />
      </Card.Header>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center pointer p-2">
          {renderData.map((colors, i) => (
            <div key={i} onClick={() => handleClick(i)} className="mx-4 d-flex flex-column-reverse">
              {colors.map((color, j) => (
                <Card key={j}
                      className="my-1 color-item"
                      style={{backgroundColor: color}}
                      body
                />
              ))}
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default GameContainer;