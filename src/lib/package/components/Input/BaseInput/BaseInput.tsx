import React from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Material UI components
import MUIInput from '@material-ui/core/Input';
import MUIFormControl from '@material-ui/core/FormControl';
import MUIClear from '@material-ui/icons/Clear';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import MUIIconButton from '@material-ui/core/IconButton';

// Components
import Label from '../../Label/Label';
import FormFieldMeta from '../../Form/FormFieldMeta/FormFieldMeta';

interface RequiredProps {
  id: string,
  name: string,
};

interface OptionalProps {
  autoFocus?: boolean,
  classes?: any, // MUI Decorator
  className?: string,
  centerText?: boolean,
  formControlClass?: string,
  disabled?: boolean,
  disableWarning?: boolean,
  disableErrorWarning?: boolean,
  error?: string,
  forwardedRef?: React.RefObject<any>,
  helperText?: string,
  inputComponent?: any,
  labelName?: string,
  placeholder?: string,
  type?: string,
  value?: string | number,
  onBlur?: (evt:React.FocusEvent) => void,
  onChange?: (evt:React.SyntheticEvent) => void,
  onClear?: (evt:React.SyntheticEvent) => void,
  onFocus?: (evt:React.FocusEvent) => void
}

const defaultProps:OptionalProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  centerText: false,
  disabled: false,
  disableWarning: false,
  helperText: '',
  inputComponent: undefined,
  labelName: '',
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: () => {},
  onChange: () => {},
  onClear: undefined,
  onFocus: () => {},
};


const styleClasses = (theme:Theme): {
  // CSS Classes
  root: any,
  focused: any,
  disabled: any,
  input: any,
  inputAdornment: any,
  iconButton: any,
  iconStyle: any,
  formControlStyle: any,
  error: any,
} => {
  return {
    root: {
      padding: '0 12px',
      height: 48,
      width: '100%',
      border: 0,
      borderRadius: 4,
      background: theme.secondaryPalette.colorVariables.WHITE,
      boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.colorVariables.GRAY}`,
      '&:hover,&:active': {
        boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
      },
    },
    focused: {
      boxShadow: `inset 0 0 0 2px ${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
      '&:hover': {
        boxShadow: `inset 0 0 0 2px ${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
      },
    },
    disabled: {
      background: theme.secondaryPalette.colorVariables.LIGHT_GRAYISH_BLUE,
      boxShadow: 'initial',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    input: {
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '100%',
      textAlign: (props:{centerText: boolean}) => props.centerText ? 'center' : 'left',
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


const BaseInput:React.FunctionComponent<RequiredProps & OptionalProps> = ({
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
}) => {
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
          error={error}
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
          !disabled && onClear && value && (
            <MUIInputAdornment
              className={classes.inputAdornment}
              position="end"
              tabIndex={-1}
            >
              <MUIIconButton
                disableRipple
                aria-label="Clear text"
                onClick={onClear}
                disabled={disabled}
                color="inherit"
                className={classes.iconButton}
                tabIndex={-1}
              >
                <MUIClear className={classes.iconStyle} tabIndex={-1}/>
              </MUIIconButton>
            </MUIInputAdornment>
          )
        }
        id={id}
        inputProps={{ 'data-quid': `BaseInput-${id}` }}
        inputRef={forwardedRef}
        inputComponent={inputComponent}
        name={name}
        placeholder={labelName ? '' : placeholder}
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
};

BaseInput.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  BaseInput
);
