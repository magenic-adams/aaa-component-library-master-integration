import React, { Fragment } from 'react';
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
    '& .Button': {
      width: '138px',
      height: '48px'
    },
    '& .Button:nth-child(1)': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderRightStyle: 'none'
    },
    '& .Button:nth-child(2)': {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px'
    },
    [theme.breakpoints.down('321px')]: {
      '& .Button': {
        width: '50%'
      }
    },
  }
})


class ToggleButtonGroup extends React.Component<propTypes> {

  constructor(props) {
    super(props); 
    this.state = {
      selectedOption: null,
    };

    this.getActiveItemIndex =  this.getActiveItemIndex.bind(this);
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
  
  render() {
    const { options, defaultItem, onSelect, disabled, classes = {}, className = '', theme} = this.props;
    const selectedIndex = this.getActiveItemIndex(defaultItem); 

    return (
      <div>
        { options && options.length
          ? <ButtonGroup className={cx('ButtonGroup', classes.root, className)}>
               <Button tabIndex={0} color={selectedIndex === 0 ? "primary" : "secondary"} 
                        onClick={() => {
                          this.toggle(0, onSelect);
                        }}
                        disabled={disabled}
                    >
                    {options[0].text}
                </Button>
                <Button tabIndex={1} color={selectedIndex === 1 ? "primary" : "secondary"} 
                        onClick={() => {
                          this.toggle(1, onSelect);
                        }}
                        disabled={disabled}
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


