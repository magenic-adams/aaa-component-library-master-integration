import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './StorySectionHeader.css';

type propTypes = {
  title: PropTypes.string,
};

export function StorySectionHeader({ title }:propTypes){
  return (
    <div className="StorySectionHeader">
      <h3 className="StorySectionHeader__title">{title}</h3>
    </div>
  );
}

export default {
  StorySectionHeader,
};
