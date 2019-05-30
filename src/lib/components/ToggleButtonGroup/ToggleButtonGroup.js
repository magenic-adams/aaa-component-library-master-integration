/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
// eslint-disable-next-line import/no-cycle
import { Button, ButtonGroup } from '..';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  className?: PropTypes.string,
  // Passed Props
  options: PropTypes.array,
  onSelect: PropTypes.func,
  value?: { id: PropTypes.string | PropTypes.number, text: PropTypes.string }
};

const styleClasses = theme => ({
  button: {
    width: '157px',
    height: '48px',
    '& span': {
      fontSize: '18px'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '50%',
      '& span': {
        fontSize: '16px',
        fontWeight: '700'
      }
    }
  },
  left: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRightStyle: 'none'
  },
  right: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
  },
  active: {
    background: theme.palette.primary.dark,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.primary.dark
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER
      }
    }
  }
});

function handleClick(value, callback) {
  if (callback) callback(value);
}

function isOptionsKeysPresent(options) {
  const acceptedKeys = ['id', 'text'];
  for (let i = 0; i < options.length; i++) {
    const keys = Object.keys(options[i]);
    for (let k = 0; k < keys.length; k++) {
      if (!acceptedKeys.includes(keys[k])) return false;
    }
  }
  return true;
}

function getClassName(value, id, classes) {
  const { button, active } = classes;
  const isIdMatched = value && value.id !== undefined && value.id === id;
  return isIdMatched ? `${button} ${active}` : button;
}

function isOptionsValid(options) {
  if (!Array.isArray(options) || options.length < 2) {
    console.error(
      'Invalid length of options. You must passed maximum number of two options'
    );
    return false;
  }
  if (!isOptionsKeysPresent(options)) {
    console.error(
      'Invalid object keys are present. Keys should contain id and text'
    );
    return false;
  }

  return true;
}

function ToggleButtonGroup({
  classes,
  className,
  value,
  disabled,
  onSelect,
  options
}: propTypes) {
  return (
    <div>
      {isOptionsValid(options) ? (
        <ButtonGroup className={cx('ButtonGroup', classes.root, className)}>
          <Button
            className={cx(
              'Button',
              `${getClassName(value, options[0].id, classes)} ${classes.left}`,
              className
            )}
            color="secondary"
            disabled={disabled}
            onClick={() => handleClick(options[0], onSelect)}
          >
            {options[0].text}
          </Button>
          <Button
            className={cx(
              'Button',
              `${getClassName(value, options[1].id, classes)} ${classes.right}`,
              className
            )}
            color="secondary"
            disabled={disabled}
            onClick={() => handleClick(options[1], onSelect)}
          >
            {options[1].text}
          </Button>
        </ButtonGroup>
      ) : null}
    </div>
  );
}

ToggleButtonGroup.defaultProps = {
  className: '',
  value: { id: '', text: '' }
};

export default withStyles(styleClasses, { withTheme: true })(ToggleButtonGroup);
