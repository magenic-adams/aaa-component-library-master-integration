import React from 'react';

export type propTypes = {
    children?: string | React.ReactNode,
    color?: 'primary' | 'secondary' | 'default',
    href?: boolean,
    onClick: () => {}
  };
  