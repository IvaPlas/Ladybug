import React from 'react';
import './style.css';

const Ladybug = ({ LadybugState }) => {
  const { posX, posY, orientation } = LadybugState;
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;
