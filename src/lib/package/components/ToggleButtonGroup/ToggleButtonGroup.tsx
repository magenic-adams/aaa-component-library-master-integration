import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';
import cx from 'clsx';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';


interface option {
  id: string | number,
  text: string,
  value: string | number
}

interface RequiredProps {
  id: string | number,
  children: any,
  options: option[],
  onSelect: (option:option) => void
}

interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
  disabled?: boolean,
  value?: string | number
}

const defaultProps:OptionalProps = {
  className: '',
  disabled: false,
  value: '',
};

const styleClasses = (theme:any):{
  // CSS Classes
  root: any,
  left: any,
  right: any,
  active:any,
} => ({
  root: {
    display: 'flex',
    '& .Button': {
      width: '157px',
      height: '48px',
      '& span': {
        fontSize: '18px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .Button': {
        width: '50%',
        '& span': {
          fontSize: '16px !important',
          fontWeight: '700 !important',
        },
        '&:hover': {
          background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        },
      },
    },
  },
  left: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRightStyle: 'none !important',
  },
  right: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  active: {
    background: `${theme.palette.primary.dark} !important`,
    color: `${theme.secondaryPalette.colorVariables.WHITE} !important`,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('sm')]: {
      background: `${theme.secondaryPalette.colorVariables.SECONDARY_HOVER} !important`,
      color: `${theme.palette.primary.main} !important`,
      '&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      },
    },
  },
});

/**
 * Propagates value selected to parent callback
 * @param  {String|Number} option - value passed
 * @param  {Function} onSelect
 * @return {void}
 */
function handleClick(
  opt:option,
  onSelect:(opt:option) => void
 ) {
  onSelect(opt);
}

/**
 * Checks to see if correct option keys are present
 * @param  {Array} options
 * @return {Boolean} isOptionsKeyPresent?
 */
function isOptionsKeysPresent(options:option[]) {
  return options.every(op => op.id && op.text);
}

/**
 * Returns the active CSS class if active
 * @param  {String|Number} value - current value
 * @param  {String|Number} id
 * @param  {Object} classes - css classes
 * @return {String} activeClass
 */
function getActiveClass(
  value:string|number|undefined,
  id: string|number,
  classes: {active: string}
):string {
  const { active } = classes;
  return value === id ? `${active}` : '';
}


/**
 * Returns if the options are valid or not
 * @param  {Array} options - passed options
 * @return {Boolean} areOptionsValid
 */
function areOptionsValid(options:option[]) {
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


const ToggleButtonGroup:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  className,
  disabled,
  options,
  value,
  onSelect,
}) => {
  return (
    <Fragment>
      {areOptionsValid(options) ? (
        <ButtonGroup className={cx(classes.root, className)}>
          <Button
            className={cx(
              `${getActiveClass(value, options[0].id, classes)} ${
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
              `${getActiveClass(value, options[1].id, classes)} ${
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
