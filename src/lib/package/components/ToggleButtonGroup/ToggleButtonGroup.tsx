import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material UI Components
import Button, { ButtonStylesOverride } from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import {
  ACE_COLOR_MAIN_WHITE,
  ACE_COLOR_MAIN_BLUE,
  ACE_COLOR_TRANSPARENT,
} from '../../constants/colors';

interface option {
  id: string | number;
  value: string | number;
  text: string;
}

interface RequiredProps {
  id: string | number;
  options: option[];
  onSelect: (option: option) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  disabled?: boolean;
  value?: string | number;
}

const defaultProps: OptionalProps = {
  className: '',
  disabled: false,
  value: '',
};

const styleClasses = (
  theme: Theme
): {
  // CSS Classes
  root: any;
  left: any;
  right: any;
  active: any;
} => ({
  root: {
    display: 'flex',
    '& .Button': {
      width: '157px',
      height: '48px',
    },
    [theme.breakpoints.down('sm')]: {
      '& .Button': {
        width: '50%',
      },
    },
  },
  left: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRight: 'none',
  },
  right: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  active: {
    background: theme.palette.primary.main,
    color: theme.secondaryPalette.colorVariables.WHITE,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
});

/**
 * Propagates value selected to parent callback
 * @param  {String|Number} option - value passed
 * @param  {Function} onSelect
 * @return {void}
 */
function handleClick(opt: option, onSelect: (opt: option) => void) {
  onSelect(opt);
}

/**
 * Checks to see if correct option keys are present
 * @param  {Array} options
 * @return {Boolean} isOptionsKeyPresent?
 */
function isOptionsKeysPresent(options: option[]) {
  return options.every(op => 
    op.hasOwnProperty('id') && 
    op.hasOwnProperty('text')
  );
}

/**
 * Returns the active CSS class if active
 * @param  {String|Number} value - current value
 * @param  {String|Number} id
 * @param  {Object} classes - css classes
 * @return {String} activeClass
 */
function getActiveClass(
  value: string | number | undefined,
  itemValue: string | number,
  classes: { active: string }
): string {
  let activeClass = '';
  const { active } = classes;
  if (value === itemValue) {
    activeClass = `${active}`;
  }
  return activeClass;
}

/**
 * Returns if the options are valid or not
 * @param  {Array} options - passed options
 * @return {Boolean} areOptionsValid
 */
function areOptionsValid(options: option[]) {
  if (!Array.isArray(options) || options.length < 2) {
    invariant(
      false,
      'Invalid length of options. You must passed maximum number of two options'
    );
  }
  if (!isOptionsKeysPresent(options)) {
    invariant(
      false,
      'Invalid object keys are present. Keys should contain id and text'
    );
  }
  return true;
}

const ToggleButtonGroup: React.FunctionComponent<
  RequiredProps & OptionalProps
> = ({ classes, className, disabled, options, value, onSelect }) => {
  return (
    <Fragment>
      {areOptionsValid(options) ? (
        <ButtonGroup className={cx(classes.root, className)}>
          <Button
            className={cx(
              `${getActiveClass(value, options[0].value, classes)} ${
                classes.left
              }`,
              className
            )}
            color="secondary"
            id={`ToggleButton-${options[0].id}`}
            disabled={disabled}
            onClick={() => handleClick(options[0], onSelect)}
          >
            {options[0].text}
          </Button>
          <Button
            className={cx(
              `${getActiveClass(value, options[1].value, classes)} ${
                classes.right
              }`,
              className
            )}
            color="secondary"
            id={`ToggleButton-${options[1].id}`}
            disabled={disabled}
            onClick={() => handleClick(options[1], onSelect)}
          >
            {options[1].text}
          </Button>
        </ButtonGroup>
      ) : null}
    </Fragment>
  );
};

ToggleButtonGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  ToggleButtonGroup
);
