import { useState } from "react"

export interface IPlayer {
    counter: number;
    id: string;
    name: string;
}

const DEFAULT_COUNTER = 20;

const DEFAULT_PLAYERS: IPlayer[] = [
    {
        id: crypto.randomUUID(),
        counter: DEFAULT_COUNTER,
        name: "Player 1",
    },
    {
        id: crypto.randomUUID(),
        counter: DEFAULT_COUNTER,
        name: "Player 2",
    }
]

const usePlayers = () => {
    const [players, setPlayers] = useState<IPlayer[]>(DEFAULT_PLAYERS);
    const getNewPlayer = () => {
        const newPlayer: IPlayer = {
            id: crypto.randomUUID(),
            counter: 20,
            name: `Player ${players.length + 1}`,
        }
        setPlayers((prevPlayers) => [...prevPlayers, newPlayer])
    };

    const resetPlayer = (id: string) => {
        setPlayers(
            (prevPlayers) => prevPlayers.filter((player) => player.id !== id)
        );
    }

    const updateCounter = (id: string, value: number) => {
        setPlayers(
            (prevPlayers) => prevPlayers.map((player) => {
                if (player.id === id) {
                    return {
                        ...player,
                        counter: value
                    }
                }
                return player
            })
        )
    }

    const increaseCounter = (player: IPlayer) => {
        updateCounter(player.id, player.counter + 1);
    }

    const decreaseCounter = (player: IPlayer) => {
        if (player.counter <= 0) return;
        updateCounter(player.id, player.counter - 1);
    }

    const resetAllPlayers = () => {
        setPlayers(DEFAULT_PLAYERS);
    }

    const resetCounter = () => {
        setPlayers(
            (prevPlayers) => prevPlayers.map((player) => {
                return {
                    ...player,
                    counter: DEFAULT_COUNTER
                }
            })
        )
    }

    const canResetPlayers = () => {
        return players.length > 2;
    }

    const updatePlayerName = (id: string, name: string) => {
        setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
                player.id === id ? { ...player, name } : player
            )
        );
    };

    return {
        players,
        getNewPlayer,
        resetPlayer,
        updateCounter,
        increaseCounter,
        decreaseCounter,
        resetAllPlayers,
        resetCounter,
        canResetPlayers,
        updatePlayerName,
    }
};

export default usePlayers;