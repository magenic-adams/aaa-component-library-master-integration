import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
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
    width: '100%',
    '& .Button': {
      marginTop: '8px',
      marginBottom: '8px'
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit',
    },
  }
})

class ToggleButtonGroup extends React.Component<propTypes, any> {

  constructor(props) {
    super(props); 
    this.state = {
      selectedOption: null,
    };

    this.getActiveItemIndex =  this.getActiveItemIndex.bind(this);
  }

  toggle(index) {
    const { options } = this.props;
    const selectedOption = options[index];
    
    this.setState({
      selectedOption
    });
    
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
    const { options, defaultItem, onSelect, disabled, classes, className, theme} = this.props;
    const selectedIndex = this.getActiveItemIndex(defaultItem); 
    
    return (
      <ButtonGroup>
          {options && options.map((option, index) => (
            <Button 
              key={index} 
              color={selectedIndex === index ? "primary" : "secondary"}
              onClick={() => {
                onSelect();
                this.toggle(index);
              }}
              disabled={disabled}
              theme
            >
              {option.text}
            </Button>
          ))}
      </ButtonGroup>
    ); 
  }  
}

export default withStyles(styleClasses, {withTheme: true})(ToggleButtonGroup);


