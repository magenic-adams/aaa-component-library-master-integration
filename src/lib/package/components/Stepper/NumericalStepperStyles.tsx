import { Theme, makeStyles } from '@material-ui/core';
import { get } from 'lodash';
import {
  ACE_CSS_INLINE,
  ACE_CSS_MIDDLE,
} from '../../constants/cssConstants.js';

export interface StepperStylesOverride {
  stepperInputWidth?: number | undefined;
  labelColor?: string | undefined;
  marginTop?: string | undefined;
}
const styleClasses = makeStyles<Theme, StepperStylesOverride>(theme => {
  return {
    stepperInputWrapper: (props: StepperStylesOverride) => ({
      display: 'inline-block',
      width: get(props, 'stepperInputWidth', 78),
    }),
    stepperIcon: {
      width: 24,
      height: '100%',
      color: theme.palette.primary.main,
    },
    actionWrapper: {
      margin: '16px 0 6px 0',
    },
    error: {
      color: theme.palette.error.main,
      fontSize: 14,
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
      },
      '& svg': {
        display: `${ACE_CSS_INLINE}`,
        fontSize: 20,
        marginLeft: 8,
        marginRight: 8,
        verticalAlign: `${ACE_CSS_MIDDLE}`,
      },
    },
  };
});

export default styleClasses;
