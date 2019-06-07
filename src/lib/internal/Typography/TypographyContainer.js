import React from 'react';

import './TypographyContainer.css';

export function TypographyContainer({name, description, usage}){
  return (
    <div className="TypographyContainer u-flex">
      <div className="TypographyContainer__name">
        {name}
      </div>
      <div className="u-flex--1">
        <div className="TypographyContainer__usage">
          {usage}
        </div>
        <div><pre>{description}</pre></div>
      </div>
    </div>
  );
}

export default {
  TypographyContainer
}
