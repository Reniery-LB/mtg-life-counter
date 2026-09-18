interface PlayerProps {
    counter: number;
    onIncreaseCounter: () => void;
    onDecreaseCounter: () => void;
    playerLabel?: string;
}

function Player({
    counter,
    onIncreaseCounter,
    onDecreaseCounter,
    playerLabel,
}: PlayerProps) {
    return (
        <div>
            <h2>{playerLabel}</h2>
            <p>Counter: {counter}</p>
            <button className="btn" onClick={onDecreaseCounter}>-</button>
            <button className="btn" onClick={onIncreaseCounter}>+</button>
        </div>
    );
}

export default Player;