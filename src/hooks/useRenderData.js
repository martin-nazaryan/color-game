import {useState, useEffect} from 'react';
import produce from 'immer';

export default function useRenderData(data, maxCount) {
  const [renderData, setRenderData] = useState(data);

  useEffect(() => {
    const nextData = produce(data, draftData => {
      draftData.map(colors => {
        if (colors.length < maxCount) {
          while (colors.length !== maxCount) colors.push('');
        }

        return colors;
      });
    });

    setRenderData(nextData);

  }, [data, maxCount]);

  return renderData;
}