import React from 'react';

// Components
import StoryCodePlayground from '../StoryCodePlayground/StoryCodePlayground';

// CSS
import './TypographyContainer.css';

function TypographyContainer({
  description,
  demo,
  scope,
  name,
  usage,
}){
  return (
    <div className="TypographyContainer">
      <div className="TypographyContainer__type u-flex">
        <div className="TypographyContainer__name">
          {name}
        </div>
        <div className="u-flex--1">
          <div className="TypographyContainer__usage">
            {usage}
          </div>
          <div className="TypographyContainer__sizes"><pre>{description}</pre></div>
        </div>
        <div>
          
        </div>
      </div>
      <StoryCodePlayground demo={demo} scope={scope} />
    </div>
  );
}

export default TypographyContainer;
