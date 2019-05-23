import React from 'react';
import cx from 'clsx';

import '../../../css/helpers.css'
import './ElementContainer.css';

export function ElementContainer({children, shouldCenter = true}){
  return (
    <div className="ElementContainer">
      <div className={cx(
        "u-flex",
        {'u-flex--center': shouldCenter}
      )}>
        {children}
      </div>
    </div>
  );
}
