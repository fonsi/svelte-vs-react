import React, { ReactElement, useContext } from 'react';
import { CalcContext } from "./Context";

export const Add = (): ReactElement => {
    const {calc, setCalc} = useContext(CalcContext);

    const onClickHandler = () => {
        setCalc(calc + 1);
    }

    return (
        <button onClick={onClickHandler}>+</button>
    )
}