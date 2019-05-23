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
      selectedValue: null,
    };
  }

  toggle(index) {
    const { options } = this.props;
    console.log(index);
    this.setState({
      selectedIndex: index,
      selectedValue: options[index]
    });
  }
  
  render() {
    const { options, classes, className, disabled, theme} = this.props;
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup>
          {options && options.map((option, index) => (
            <Button 
              key={index} 
              color={selectedIndex == index ? "primary" : "secondary"}
              onClick={this.toggle.bind(this, index)}
              disabled={disabled}
            >
              {option}
            </Button>
          ))}
      </ButtonGroup>
    ); 
  }  
}

export default withStyles(styleClasses, {withTheme: true})(ToggleButtonGroup);


