import React, { ReactElement } from 'react';

const divStyles = {
    color: "#333399",
}

const spanStyles = {
    color: "#993333",
}

export const App = (): ReactElement =>
    <div style={divStyles}>I am a styled React div with a styled <span style={spanStyles}>span</span></div>;