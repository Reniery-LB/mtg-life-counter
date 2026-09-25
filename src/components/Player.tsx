import type { IPlayer } from "../hooks/usePlayers";

interface PlayerProps {
    player: IPlayer;
    onIncreaseCounter: () => void;
    onDecreaseCounter: () => void;
    onRemovePlayer?: () => void;
    onNameChange?: (name: string) => void;
    playerLabel?: string;
    showRemoveButton?: boolean;
}

function Player({
    player,
    onIncreaseCounter,
    onDecreaseCounter,
    onRemovePlayer,
    onNameChange,
    playerLabel,
    showRemoveButton = true,
}: PlayerProps) {
    return (
        <div>
            <h2>{player.name || playerLabel}</h2>
            <input
                type="text"
                className="player-input"
                value={player.name}
                onChange={(e) => onNameChange?.(e.target.value)}
                placeholder="Player Name"
            />
            <p>{player.counter}</p>
            <p className="btn" onClick={onDecreaseCounter}>-</p>
            <p className="btn" onClick={onIncreaseCounter}>+</p>
            {showRemoveButton && (
                <p className="remove" onClick={onRemovePlayer}>Remove</p>
            )}
        </div>
    );
}

export default Player;