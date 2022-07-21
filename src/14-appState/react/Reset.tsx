import React, { ReactElement, useContext } from 'react';
import { CalcContext } from "./Context";

export const Reset = (): ReactElement => {
    const { setCalc } = useContext(CalcContext);

    const onClickHandler = () => {
        setCalc(0);
    }

    return (
        <button onClick={onClickHandler}>Reset</button>
    )
}