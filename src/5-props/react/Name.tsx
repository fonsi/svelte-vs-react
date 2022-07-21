import React, { ReactElement } from 'react';

interface Props {
    name: string;
}

export const Name = ({ name }: Props): ReactElement =>
    <span>{name}</span>;