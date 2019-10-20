import React, { useState } from 'react';

const withMouse = Component => {
  const MouseEvent = props => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = evt => {
      // clientX, clientY là thuộc tính của javascript
      setPosition({ ...position, x: evt.clientX, y: evt.clientY });
    };

    return (
      <div onMouseMove={handleMouseMove}>
        <Component {...props} position={position} />
      </div>
    );
  };

  return MouseEvent;
};

export default withMouse;
