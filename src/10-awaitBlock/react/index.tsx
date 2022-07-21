import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "./App";

const container = document.getElementById('root-await-loop-react') as HTMLElement;
const root = createRoot(container);

root.render(<App />);