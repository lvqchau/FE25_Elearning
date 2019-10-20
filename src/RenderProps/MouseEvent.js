import React, { useState } from 'react';

const MouseEvent = props => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = evt => {
    setPosition({ ...position, x: evt.clientX, y: evt.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{props.render(position)}</div>;
};

export default MouseEvent;
