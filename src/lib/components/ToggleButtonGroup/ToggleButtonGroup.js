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
  root: {
    '& .Button': {
      width: '157px',
      height: '48px',
      '& span': {
        fontSize: '18px'
      }
    },
    [theme.breakpoints.down('sm')]: {
      '& .Button': {
        width: '50%',
        '& span': {
          fontSize: '16px !important',
          fontWeight: '700 !important'
        },
        '&:hover': {
          background: theme.palette.colorVariables.SECONDARY_HOVER
        }
      }
    }
  },
  left: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRightStyle: 'none !important'
  },
  right: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
  },
  active: {
    background: `${theme.palette.primary.dark} !important`,
    color: `${theme.palette.common.white} !important`,
    '&:hover': {
      background: theme.palette.primary.dark
    },
    [theme.breakpoints.down('sm')]: {
      background: `${theme.palette.colorVariables.SECONDARY_HOVER} !important`,
      color: `${theme.palette.primary.main} !important`,
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
  return options.every(op => op.id && op.text);
}

function getActiveClass(value, id, classes) {
  const { active } = classes;
  return value === id ? `${active}` : '';
}

function isOptionsValid(options) {
  if (!Array.isArray(options) || options.length < 2) {
    invariant(
      false,
      'Invalid length of options. You must passed maximum number of two options'
    );
    return false;
  }
  if (!isOptionsKeysPresent(options)) {
    invariant(
      false,
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
        <ButtonGroup className={cx(classes.root, className)}>
          <Button
            className={cx(
              `${getActiveClass(value, options[0].id, classes)} ${
                classes.left
              }`,
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
              `${getActiveClass(value, options[1].id, classes)} ${
                classes.right
              }`,
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
  value: ''
};

export default withStyles(styleClasses, { withTheme: true })(ToggleButtonGroup);
