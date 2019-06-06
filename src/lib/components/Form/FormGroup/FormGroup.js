import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';

// Components
import MUIFormGroup from '@material-ui/core/FormGroup';

function FormGroup({ children, className }) {
  return (
    <MUIFormGroup className={cx('ButtonGroup', className)}>
      {children}
    </MUIFormGroup>
  );
}

FormGroup.defaultProps = {
  className: PropTypes.string,
};

export default FormGroup;
