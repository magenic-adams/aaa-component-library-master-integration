import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import MUIInput from '@material-ui/core/Input';
import MUIFormControl from '@material-ui/core/FormControl';
import MUIFormHelperText from '@material-ui/core/FormHelperText';
import MUIClear from '@material-ui/icons/Clear';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import MUIIconButton from '@material-ui/core/IconButton';
import MUIReportProblem from '@material-ui/icons/ReportProblem';

// Components
import Label from '../../Label/Label';

const styleClasses = theme => ({
  root: {
    marginTop: '8px',
    height: 48,
    width: '100%',
    border: 0,
    borderRadius: 4,
    background: theme.palette.colorVariables.WHITE,
    boxShadow: `inset 0 0 0 1px ${theme.palette.colorVariables.GRAY}`,
    '&:hover,&:active': {
      boxShadow: `inset 0 0 0 1px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
  },
  focused: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.colorVariables.DARKER_BLUE}`,
    '&:hover': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
  },
  disabled: {
    background: theme.palette.disabled.main,
    boxShadow: 'initial',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  input: {
    padding: '10px 12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
  iconButton: {
    padding: 10,
    transition: 'none',
  },
  iconStyle: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  formControlStyle: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
  },
  helperTextStyle: {
    marginTop: 0,
    color: `${theme.palette.colorVariables.GRAY} !important`,
    [theme.breakpoints.up('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  helperTextStyleErrorActive: {
    marginTop: 8,
  },
  error: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    '&$focused': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    },
  },
  metaWrapper: {
    marginTop: 8,
    minHeight: 20,
  },
  errorText: {
    display: 'inline',
    marginTop: 0,
    paddingTop: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  errorIcon: {
    display: 'inline',
    verticalAlign: 'text-bottom',
    fontSize: 20,
    marginRight: 8,
  },
});

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className?: PropTypes.string,
  formControlClass?: PropTypes.string,
  disabled?: PropTypes.bool,
  disableWarning?: PropTypes.bool,
  error?: PropTypes.string,
  disableErrorWarning?: PropTypes.bool,
  helperText?: PropTypes.string,
  id: PropTypes.string,
  inputComponent?: PropTypes.element,
  labelName?: PropTypes.string,
  name: PropTypes.string,
  placeholder?: PropTypes.string,
  type?: PropTypes.string,
  value?: PropTypes.string,
  onBlur?: PropTypes.func,
  onChange?: PropTypes.func,
  onClear?: PropTypes.func,
  onFocus?: PropTypes.func,
};


function BaseInput({
  autoFocus,
  classes,
  className,
  forwardedRef,
  formControlClass,
  disabled,
  disableWarning,
  error,
  helperText,
  id,
  inputComponent,
  labelName,
  name,
  placeholder,
  type,
  value,
  onBlur,
  onChange,
  onClear,
  onFocus,
}): propTypes {
  return (
    <MUIFormControl
      className={cx(classes.formControlStyle, formControlClass)}
      error={!!error}
      disabled={disabled}
    >
      {labelName && (
        <Label id={id}>
          {labelName}
        </Label>
      )}

      <MUIInput
        autoFocus={autoFocus}
        autoComplete="off"
        classes={{
          root: classes.root,
          disabled: classes.disabled,
          focused: classes.focused,
          error: classes.error,
          input: classes.input,
        }}
        className={cx('BaseInput', className)}
        disableUnderline
        endAdornment={
          (onClear && value) && (
            <MUIInputAdornment position="end">
              <MUIIconButton
                disableRipple
                aria-label="Clear text"
                onClick={onClear}
                disabled={disabled}
                color="inherit"
                className={classes.iconButton}
              >
                <MUIClear className={classes.iconStyle} />
              </MUIIconButton>
            </MUIInputAdornment>
          )
        }
        id={id}
        inputProps={{ 'data-quid': `BaseInput-${id}` }}
        inputRef={forwardedRef}
        inputComponent={inputComponent}
        name={name}
        placeholder={labelName ? null : placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />


      <div className={classes.metaWrapper}>
        {(error && !disableWarning) && (
          <div>
            <MUIReportProblem
              color="error"
              className={classes.errorIcon}
            />
            <MUIFormHelperText
              id={`${id}-component-error-text`}
              className={classes.errorText}
            >
              {error}
            </MUIFormHelperText>
          </div>
        )}

        {helperText && (
          <MUIFormHelperText
            id={`${id}-component-helper-text`}
            className={cx(
              classes.helperTextStyle,
              { [classes.helperTextStyleErrorActive] : error && !disableWarning }
            )}
          >
            {helperText}
          </MUIFormHelperText>
        )}
      </div>
    </MUIFormControl>
  );
}

BaseInput.defaultProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  disabled: false,
  disableWarning: false,
  helperText: null,
  inputComponent: undefined,
  labelName: null,
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: () => { },
  onChange: () => { },
  onClear: null,
  onFocus: () => { },
};


export default withStyles(styleClasses, { index: 0, withTheme: true })(BaseInput);
