import './App.css';

import Score from "./components/score/Score";
import Grid from "./components/grid/Grid";
import Result from "./components/result";
import { useState } from 'react';

function App() {
  const [boardWigth] = useState(4)
  const [gameOver, setGameOver] = useState(true);

  return (
    <div
      className="container"
    >
      <Score score={15} />
      <Grid
        boardWigth={boardWigth}
        setGameOver={setGameOver}
        gameOver={gameOver}
      />
      <Result gameOver={gameOver} />
    </div>
  );
}

export default App;
