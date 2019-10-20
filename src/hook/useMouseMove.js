import React, { useState } from 'react';

const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return [
    position,
    evt =>
      setPosition({
        ...position,
        x: evt.clientX,
        y: evt.clientY,
      }),
  ];
};

export default useMouseMove;
