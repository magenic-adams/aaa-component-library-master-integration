import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './StoryLayoutContainer.css';

type propTypes = {
  children: PropTypes.node,
};

export function StoryLayoutContainer({children}:propTypes){
  return (
    <div className="StoryLayoutContainer">
      {children}
    </div>
  );
}

export default {
  StoryLayoutContainer
};
