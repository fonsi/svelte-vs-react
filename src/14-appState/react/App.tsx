import React, { ReactElement } from 'react';
import { CalcContextProvider } from "./Context";
import { Screen } from "./Screen";
import { Add } from "./Add";
import { Remove } from "./Remove";
import { Reset } from "./Reset";

const columnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

const buttonsStyles: React.CSSProperties = {
    marginTop: '16px',
}

export const App = (): ReactElement => {
    return <CalcContextProvider>
        <div style={columnStyles}>
            <div>
                <Screen />
            </div>
            <div style={buttonsStyles}>
                <Add />
                <Remove />
                <Reset />
            </div>
        </div>
    </CalcContextProvider>
}
