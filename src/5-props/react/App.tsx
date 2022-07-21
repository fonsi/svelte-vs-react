import React, { ReactElement } from 'react';
import { Name } from './Name';

export const App = (): ReactElement =>
    <div>My dynamic name is <Name name={'React'} /></div>;
