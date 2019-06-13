import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

// CSS
import './StoryLayoutContainer.css';

type propTypes = {
  children: PropTypes.node,
  verticalPadding: PropTypes.bool,
};

export function StoryLayoutContainer({ children, verticalPadding }:propTypes){
  return (
    <div className={cx(
      'StoryLayoutContainer',
      { 'StoryLayoutContainer--vertical-padding': verticalPadding }
    )}>
      {children}
    </div>
  );
}

export default {
  StoryLayoutContainer,
};
