import React, { ReactElement, useState } from 'react';
import { Button } from "./Button";

export const App = (): ReactElement => {
    const [lastClicked, setLastClicked] = useState(0);

    const clickHandler = (buttonId: number) => {
        setLastClicked(buttonId);
    }

    return <div>
        <p>Last clicked: {lastClicked}</p>
        <Button buttonId={1} onClick={clickHandler} />
        <Button buttonId={2} onClick={clickHandler} />
        <Button buttonId={3} onClick={clickHandler} />
    </div>;
}
