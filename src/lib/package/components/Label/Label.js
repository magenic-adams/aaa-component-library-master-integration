import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTheme, makeStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

const styleClasses = makeStyles({
  root: {
    color: props =>
      _.get(
        props,
        'overrides.label.color',
        props.theme.palette.colorVariables.BLACK
      ),
    display: 'block',
    marginBottom: -8,
    fontFamily: props => props.theme.typography.fontFamily,
    fontWeight: props => props.theme.typography.fontWeight,
    ...props => props.theme.typography.body1,
  },
  formControl: {
    position: 'relative',
    transform: 'unset',
  },
});

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  children: PropTypes.string,
  className?: PropTypes.string,
  disabled?: PropTypes.bool,
  error?: PropTypes.bool,
  focused?: PropTypes.bool,
  id: PropTypes.string
};

function Label(props): propTypes {
  const { children, className, disabled, error, focused, id } = props;
  const classes = styleClasses(props);
  return (
    <MUIInputLabel
      className={cx('InputLabel', className)}
      classes={classes}
      disabled={disabled}
      disableAnimation
      error={error}
      focused={focused}
      htmlFor={id}
      data-quid={`Label-${id}`}
      shrink={false}
    >
      {children}
    </MUIInputLabel>
  );
}

Label.defaultProps = {
  className: '',
};

export default withTheme(Label);
