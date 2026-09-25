
import Player from './components/Player';
import usePlayers from './hooks/usePlayers';
import '../App.css';

const RESET_CONFIRM_MESSAGE = "¿Estas seguro de reiniciar los puntos?";

function App() {

  const {
    players,
    increaseCounter,
    decreaseCounter,
    resetCounter,
    getNewPlayer,
    resetPlayer,
    resetAllPlayers,
    canResetPlayers,
    updatePlayerName,
  } = usePlayers();

  const handleOnResetClick = () => {
    const confirmar = window.confirm(RESET_CONFIRM_MESSAGE);
    if (confirmar) {
      resetCounter();
    }
  }

  const handleOnAddPlayer = () => {
    getNewPlayer();
  }

  const handleOnResetPlayers = () => {
    resetAllPlayers();
  }

  return (
    <div className="app">
      <div className="actions">
        <button className="reset" onClick={handleOnResetClick}>Reset</button>
        <button className="add" onClick={handleOnAddPlayer}>Add Player</button>
        {
          canResetPlayers() && <button className="resetAll" onClick={handleOnResetPlayers}>Reset All Players</button>
        }
      </div>

      <h1 className="title">Magic The Gathering</h1>
      {players.map((player, index) => (
        <Player
          key={player.id}
          player={player}
          onIncreaseCounter={() => increaseCounter(player)}
          onDecreaseCounter={() => decreaseCounter(player)}
          onRemovePlayer={() => resetPlayer(player.id)}
          onNameChange={(name) => updatePlayerName(player.id, name)}
          playerLabel={`Player ${index + 1}`}
          showRemoveButton={canResetPlayers()}
        />
      ))}
    </div>
  )
}

export default App;
