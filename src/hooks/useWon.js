import {useState, useEffect} from 'react';

export default function useWon(colorsData, selectedColor, maxCount) {
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (colorsData.length && !selectedColor) {
      setWon(true);

      for (let i = 0; i < colorsData.length; i++) {
        if (!colorsData[i].length) continue;

        if (colorsData[i].length !== maxCount) {
          setWon(false);
          break;
        }

        const uniqueObj = new Set();
        colorsData[i].forEach((color) => uniqueObj.add(color));
        if (uniqueObj.size !== 1) {
          setWon(false);
          break;
        }
      }
    }

  }, [colorsData, selectedColor, maxCount]);

  return won;
}