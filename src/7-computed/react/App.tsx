import React, { ReactElement, useEffect, useState} from 'react';

export const App = (): ReactElement => {
    const [counter, setCounter] = useState(0);
    const [evenOrOddText, setEvenOrOddText] = useState<'even' | 'odd'>('even');

    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setEvenOrOddText(counter % 2 ? 'odd' : 'even');
    }, [counter]);

    useEffect(() => {
        console.log('[React]');
        console.log(`${counter} is even or odd?: ${evenOrOddText}`);
    }, [counter, evenOrOddText]);


    return <div>
        <p>{counter} is {evenOrOddText}</p>
        <button onClick={onClickHandler}>Click!</button>
    </div>;
}
