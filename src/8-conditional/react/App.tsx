import React, { ReactElement, useEffect, useState } from 'react';

export const App = (): ReactElement => {
    const [counter, setCounter] = useState(0);
    const [isEven, setIsEven] = useState(true);

    const onClickHandler = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setIsEven(!!(counter % 2));
    }, [counter]);

    return <div>
        <p>
            {counter} is { isEven ? 'even' : 'odd'}
            {/*{*/}
            {/*    (() => {*/}
            {/*        if (isEven) {*/}
            {/*            return ' even';*/}
            {/*        } else {*/}
            {/*            return ' odd';*/}
            {/*        }*/}
            {/*    })()*/}
            {/*}*/}
        </p>
        <button onClick={onClickHandler}>Click!</button>
    </div>;
}
