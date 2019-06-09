import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'clsx';

// CSS
import './StoryIntroduction.css';

type propTypes = {
  elementName: PropTypes.string,
};

export function StoryIntroduction({elementName}:propTypes){
  return (
    <div className="StoryIntroduction">
      <h1 className="StoryIntroduction__title">{elementName}</h1>
    </div>
  );
}

export default {
  StoryIntroduction
};
