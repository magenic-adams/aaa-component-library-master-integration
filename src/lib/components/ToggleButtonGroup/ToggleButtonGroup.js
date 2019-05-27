import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import {Button, ButtonGroup} from '../../components';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  options: PropTypes.array,
  children: PropTypes.node,
  onClick: PropTypes.func,
  defaultItem?: PropTypes.object;
  className?: PropTypes.string
};

const styleClasses = theme => ({
  root: {
    '& .Button:nth-child(1)': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderRightStyle: 'none'
    },
    '& .Button:nth-child(2)': {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px'
    }
  },
  button: {
    width: '138px',
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
  active: {
    background: theme.palette.primary.dark,
    color: 'white',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER,
      }
    }
  }
})

class ToggleButtonGroup extends React.Component<propTypes> {

  constructor(props) {
    super(props); 
    this.state = {
      selectedOption: null,
    };
  }

  toggle(index, callBack) {
    const { options } = this.props;
    const selectedOption = options[index];
    
    this.setState({
      selectedOption
    });

    if(callBack)
      callBack();
    
    return selectedOption;
  }

  getActiveItemIndex(defaultItem){
    const { options } = this.props;
    const { selectedOption } = this.state;
    let selectedIndex = -1;

    if (defaultItem){
      selectedIndex = options.findIndex(option => option.value === defaultItem.value);
    }
    if (selectedOption){
      selectedIndex = options.findIndex(option => option.value === selectedOption.value);
    }
    return selectedIndex;
  } 

  getClassName(selectedIndex, elementIndex){
    const { classes } = this.props;
    return selectedIndex === elementIndex ? `${classes.button} ${classes.active}`: classes.button;
  }
  
  render() {
    const { classes = {}, className = '', defaultItem, disabled, onSelect, options, theme} = this.props;
    const selectedIndex = this.getActiveItemIndex(defaultItem); 
    
    return (
      <div>
        { options && options.length
          ? <ButtonGroup className={cx('ButtonGroup', classes.root, className)}>
               <Button className={cx('Button', this.getClassName(selectedIndex, 0), className)} 
                       color="secondary"
                       disabled={disabled}
                       tabIndex={0} 
                        onClick={() => {
                          return this.toggle(0, onSelect);
                        }}
                    >
                    {options[0].text}
                </Button>
                <Button className={cx('Button', this.getClassName(selectedIndex, 1), className)} 
                        color="secondary"
                        disabled={disabled}
                        onClick={() => {
                          return this.toggle(1, onSelect);
                        }}
                    >
                    {options[1].text}
                </Button>
            </ButtonGroup>
          : null
        }
      </div>
    );
  }  
}
export default withStyles(styleClasses, {withTheme: true})(ToggleButtonGroup);


