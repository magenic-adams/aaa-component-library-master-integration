import React from 'react';
import cx from 'clsx';

// CSS
import './StoryLayoutContainer.css';

type propTypes = {
  children: any,
  verticalPadding: boolean,
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
