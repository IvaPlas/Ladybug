import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ladybug from './components/Ladybug';
import './style.css';

const STEP_SIZE = 25;

const App = () => {
  const [LadyBugState, setLadyBugState] = useState({
    posX: 100,
    posY: 100,
    orientation: 'right',
  });
  ///zmena useStatu z:
  // const [posX, setPosX] = useState(100);
  // const [posY, setPosY] = useState(100);
  // const [orientation, setOrientation] = useState('right');

  const handleKeyUp = ({ code }) => {
    if (code === 'ArrowUp') {
      // setOrientation('up');
      // setPosX(posX - STEP_SIZE);
      setLadyBugState({
        ...LadyBugState,
        orientation: 'up',
        posX: LadyBugState.posX - STEP_SIZE,
      });
    } else if (code === 'ArrowLeft') {
      // setOrientation('left');
      // setPosY(posY - STEP_SIZE);
      setLadyBugState({
        ...LadyBugState,
        orientation: 'left',
        posY: LadyBugState.posY - STEP_SIZE,
      });
    } else if (code === 'ArrowRight') {
      // setOrientation('right');
      // setPosY(posY + STEP_SIZE);
      setLadyBugState({
        ...LadyBugState,
        orientation: 'right',
        posY: LadyBugState.posY + STEP_SIZE,
      });
    } else if (code === 'ArrowDown') {
      // setOrientation('down');
      // setPosX(posX + STEP_SIZE);
      setLadyBugState({
        ...LadyBugState,
        orientation: 'down',
        posX: LadyBugState.posX + STEP_SIZE,
      });
    }
  };

  return (
    <div tabIndex={-1} className="field" onKeyDown={handleKeyUp}>
      <header>Click anywhere to start the game</header>
      {/* <Ladybug posX={posX} posY={posY} orientation={orientation} /> */}
      <Ladybug LadybugState={LadyBugState} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
