import React, { ReactElement } from 'react';

const words = ['This', 'is', 'a', 'list'];

export const App = (): ReactElement => {
    return <div>
        <ul>
            {
                words.map(word => <li key={word}>{word}</li>)
            }
        </ul>
    </div>;
}
