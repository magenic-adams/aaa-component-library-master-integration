import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';
import cx from 'clsx';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  className?: PropTypes.string,
  // Passed Props
  options: [
    { id: PropTypes.number | PropTypes.string, text: PropTypes.string }
  ],
  onSelect: PropTypes.func,
  value?: PropTypes.string | PropTypes.number
};

const styleClasses = theme => ({
  button: {
    width: '157px',
    height: '48px',
    '& span': {
      fontSize: '18px'
    },
    [theme.breakpoints.between('sm', 'md')]: {
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
  }
});

function handleClick(value, callback) {
  if (callback) callback(value);
}

function isOptionsKeysPresent(options) {
  return options.every(op => op.id && op.text);
}

function getColor(value, id) {
  return value === id ? 'primary' : 'secondary';
}

function isOptionsValid(options) {
  console.log(process.env.NODE_ENV, 'ENV');
  if (!Array.isArray(options) || options.length < 2) {
    if (process.env.NODE_ENV !== 'production') {
      invariant(
        false,
        'Invalid length of options. You must passed maximum number of two options'
      );
    } else {
      invariant(false);
    }
    return false;
  }
  if (!isOptionsKeysPresent(options)) {
    if (process.env.NODE_ENV !== 'production') {
      invariant(
        false,
        'Invalid object keys are present. Keys should contain id and text'
      );
    } else {
      invariant(false);
    }
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
        <ButtonGroup className={cx(classes.root, className)}>
          <Button
            className={cx(`${classes.button} ${classes.left}`, className)}
            color={getColor(value, options[0].id)}
            disabled={disabled}
            onClick={() => handleClick(options[0], onSelect)}
          >
            {options[0].text}
          </Button>
          <Button
            className={cx(`${classes.button} ${classes.right}`, className)}
            color={getColor(value, options[1].id)}
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
  value: ''
};

export default withStyles(styleClasses, { withTheme: true })(ToggleButtonGroup);
