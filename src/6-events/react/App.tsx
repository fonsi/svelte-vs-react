import React, { ReactElement, useState } from 'react';

export const App = (): ReactElement => {
    const [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    return <div>
        <p>Clicks: {counter}</p>
        <button onClick={onClickHandler}>Click!</button>
    </div>;
}
