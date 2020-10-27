import produce from 'immer';

export const generateRenderData = (data, maxCount) => {
  return produce(data, draftData => {
    draftData.map(colors => {
      if (colors.length < maxCount) {
        while (colors.length !== maxCount) colors.push('');
      }

      return colors;
    });
  });
};
