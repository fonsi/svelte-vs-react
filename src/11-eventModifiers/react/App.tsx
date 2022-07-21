import React, { MouseEventHandler, ReactElement } from 'react';

export const App = (): ReactElement => {
    const clickHandler: MouseEventHandler = (e) => {
        e.preventDefault();
        console.log('[React] Here I am!');
    }

    return <div>
        <a onClick={clickHandler} href="https://mailtrack.io">Go to Mailtrack</a>
    </div>;
}
