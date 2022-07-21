import React, { ReactElement, useContext } from 'react';
import { CalcContext } from "./Context";

export const Screen = (): ReactElement => {
    const { calc } = useContext(CalcContext);

    return (
        <input type="number" readOnly value={calc} />
    )
}