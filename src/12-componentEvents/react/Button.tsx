import React, { MouseEventHandler, ReactElement } from 'react';

interface Props {
    buttonId: number;
    onClick: (buttonId: number) => void;
}

export const Button = ({buttonId, onClick}: Props): ReactElement => {
    const clickHandler: MouseEventHandler = (e) => {
        onClick(buttonId);
    }

    return <button onClick={clickHandler}>Button {buttonId}</button>;
}
