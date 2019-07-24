import React from 'react';
import { Portal as MUIPortal } from '@material-ui/core';

interface RequiredProps {
    id: string,
    children: any,
};

interface OptionalProps {
    container?: any,
};

const Portal:React.FunctionComponent<RequiredProps & OptionalProps> = ({
    children,
    container,
    id,
}) => (
    <MUIPortal
    container={container}
    data-quid={`Portal-${id}`}
    >
        {children}
    </MUIPortal>
);

export default Portal;