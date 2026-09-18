import usePlayer from './hooks/usePlayer';
import Player from './components/Player';
import '../App.css';

const RESET_CONFIRM_MESSAGE = "¿Estas seguro de reiniciar los puntos?";

function App() {

  const player1 = usePlayer();
  const player2 = usePlayer();

  const handleOnResetClick = () => {
    const confirmar = window.confirm(RESET_CONFIRM_MESSAGE);
    if (confirmar) {
      player1.reset();
      player2.reset();
    }
  }

  return (
    <div className="app">
      <h1 className="title">Magic The Gathering</h1>

      <Player
        counter={player1.counter}
        onIncreaseCounter={player1.increaseCounter}
        onDecreaseCounter={player1.decreaseCounter}
        playerLabel="Player 1"
      />

      <Player
        counter={player2.counter}
        onIncreaseCounter={player2.increaseCounter}
        onDecreaseCounter={player2.decreaseCounter}
        playerLabel="Player 2"
      />

      <button className="reset" onClick={handleOnResetClick}>Reiniciar</button>
    </div>
  )
}

export default App;
