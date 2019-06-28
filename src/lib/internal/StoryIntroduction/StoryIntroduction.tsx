import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'clsx';

// CSS
import './StoryIntroduction.css';

type propTypes = {
  elementName: string,
  subtitle: string,
};

export function StoryIntroduction({ elementName, subtitle }:propTypes){
  return (
    <div className="StoryIntroduction">
      <h1 className="StoryIntroduction__title">{elementName}</h1>
      {subtitle &&
        <h2 className="StoryIntroduction__subtitle">{subtitle}</h2>
      }
    </div>
  );
}

export default StoryIntroduction;
