import React, { PropsWithChildren, ReactElement, useState } from 'react';

export const CalcContext = React.createContext({
    calc: 0,
    setCalc: (calc: number) => {}
});

export const CalcContextProvider = ({children}: PropsWithChildren<{}>): ReactElement => {
    const [calc, setCalc] = useState(0);

    return (
        <CalcContext.Provider value={{ calc, setCalc }}>
            { children }
        </CalcContext.Provider>
    );
}