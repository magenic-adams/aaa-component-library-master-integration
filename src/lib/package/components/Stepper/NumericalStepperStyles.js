import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import { AAA_CSS_INLINE, AAA_CSS_MIDDLE } from '../../constants/cssConstants';

// If overrides need to be passed down to child components
// extract it into a method so makeStyles dynamic class naming
// will not be used.
export const overrideStepperLabel = props => {
  return {
    label: {
      color: _.get(
        props,
        'overrides.label.color',
        props.theme.palette.colorVariables.BLACK
      ),
      marginTop: 8,
      fontSize: 16,
      [props.theme.breakpoints.up('md')]: {
        fontSize: 18,
      },
    },
  };
};

export const overrideStepperIcon = props => {
  return {
    stepperIcon: {
      width: 24,
      height: '100%',
      color: props.theme.palette.primary.main,
    },
  };
};

export const overrideInputWrapper = () => {
  return {
    stepperInputWrapper: {
      display: 'inline-block',
      width: 78,
    },
  };
};

// IF the style is part of Material UI API keep it inside styleClasses
export const styleClasses = makeStyles({
  actionWrapper: {
    margin: '16px 0 6px 0',
  },
  helperText: {
    color: props => props.theme.palette.colorVariables.GRAY,
    marginTop: 8,
    '& span': {
      fontSize: 14,
      [props => props.theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
  },
  error: {
    color: props => props.theme.palette.error.main,
    fontSize: 14,
    [props => props.theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    '& svg': {
      display: `${AAA_CSS_INLINE}`,
      fontSize: 20,
      marginLeft: 8,
      marginRight: 8,
      verticalAlign: `${AAA_CSS_MIDDLE}`,
    },
  },
});
