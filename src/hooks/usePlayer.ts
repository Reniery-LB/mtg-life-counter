import { useState } from "react";

const DEFAULT_COUNTER = 20;

const usePlayer = () => {
    const [counter, setCounter] = useState(DEFAULT_COUNTER);

    const increaseCounter = () => {
        setCounter((prev) => prev + 1);
    };

    const decreaseCounter = () => {
        setCounter((prev) => {
            if (prev <= 0) {
                return 0;
            }
            return prev - 1;
        });
    };

    const reset = () => {
        setCounter(DEFAULT_COUNTER);
    };

    return {
        counter,
        increaseCounter,
        decreaseCounter,
        reset,
    }
};

export default usePlayer;