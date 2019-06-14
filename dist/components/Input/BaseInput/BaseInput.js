import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import MUIInput from '@material-ui/core/Input';
import MUIFormControl from '@material-ui/core/FormControl';
import MUIClear from '@material-ui/icons/Clear';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import MUIIconButton from '@material-ui/core/IconButton';

// Components
import Label from '../../Label/Label';
import FormFieldMeta from '../../Form/FormFieldMeta/FormFieldMeta';

const styleClasses = theme => {
  return {
    root: {
      padding: '0 12px',
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
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '100%',
      textAlign: props => props.centerText ? 'center' : 'left',
      [theme.breakpoints.up('sm')]: {
        fontSize: 16,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
    inputAdornment: {
      marginRight: -10,
    },
    iconButton: {
      height: 48,
      width: 48,
      borderRadius: 0,
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
        maxWidth: 534,
      },
    },
    helperTextStyleErrorActive: {
      marginTop: 8,
    },
    error: {
      boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
      '&$focused': { // TODO
        boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
      },
      // Modifiers
      centerText: {
        textAlign: 'center',
      },
    },
  };
};

type propTypes = {
  // MUI Decorator
  classes: object,
  // Passed Props
  className?: string,
  formControlClass?: string,
  disabled?: boolean,
  disableWarning?: boolean,
  error?: string,
  disableErrorWarning?: boolean,
  helperText?: string,
  id: string,
  inputComponent?: PropTypes.element,
  labelName?: string,
  name: string,
  placeholder?: string,
  type?: string,
  value?: string,
  onBlur?: PropTypes.func,
  onChange?: PropTypes.func,
  onClear?: PropTypes.func,
  onFocus?: PropTypes.func
};

function BaseInput({
  autoFocus,
  classes,
  className,
  centerText,
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
        <Label
          id={id}
          disabled={false}
          error={false}
          focused={false}
        >
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
        className={cx(
          'BaseInput',
          className,
          { [classes.centerText] : centerText }
        )}
        disableUnderline
        endAdornment={
          onClear && value && (
            <MUIInputAdornment
              className={classes.inputAdornment}
              position="end"
            >
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

      <FormFieldMeta
        disableWarning={disableWarning}
        error={error}
        helperText={helperText}
        id={id}
      />
    </MUIFormControl>
  );
}

BaseInput.defaultProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  centerText: false,
  disabled: false,
  disableWarning: false,
  helperText: null,
  inputComponent: undefined,
  labelName: null,
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: () => {},
  onChange: () => {},
  onClear: null,
  onFocus: () => {},
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  BaseInput
);
