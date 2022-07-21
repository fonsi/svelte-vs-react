import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "./App";

const container = document.getElementById('root-event-modifiers-react') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
