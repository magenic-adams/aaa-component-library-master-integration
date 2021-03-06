import React from 'react';
import createSvgIcon from '../utilities/createSvgIcon/createSvgIcon';


// <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/>
export default createSvgIcon(
  React.createElement(
    React.Fragment,
    null,
    React.createElement('path', {
      d: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
    }),
    React.createElement('path', {
      fill: 'none',
      d: 'M0 0h24v24H0V0z',
    }
  )
), 'RightArrowIcon');
