import { useState } from 'react'
import '../App.css';

function App() {

  const [player1, setPlayer1] = useState(20);
  const [player2, setPlayer2] = useState(20);

  const decreasePlayer1 = () => {
    if (player1 > 0)
      setPlayer1(player1 - 1);
  }

  const decreasePlayer2 = () => {
    if (player2 > 0)
      setPlayer2(player2 - 1);
  }

  const reset = () => {
    const confirmar = window.confirm("¿Estas seguro de reiniciar los puntos?");
    if (confirmar) {
      setPlayer1(20);
      setPlayer2(20);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Magic The Gathering</h1>
      <br />
      <h1>Player 1: {player1}</h1>
      <button className="btn" onClick={decreasePlayer1}>-</button>
      <button className="btn" onClick={() => setPlayer1(player1 + 1)}>+</button>

      <h1>Player 2: {player2}</h1>
      <button className="btn" onClick={decreasePlayer2}>-</button>
      <button className="btn" onClick={() => setPlayer2(player2 + 1)}>+</button>

      <br />
      <button className="reset" onClick={reset}>Reiniciar</button>

    </div>
  )
}

export default App
