import React from 'react';

const Step = ({step}) => (
  <span className="flex-grow-1 h4">Steps: <span className="text-info"><strong>{step}</strong></span></span>
);

export default Step;