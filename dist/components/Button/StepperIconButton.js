import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from './Button';

var IconButton = function IconButton(props) {
  var classes = props.classes,
      children = props.children,
      disabled = props.disabled,
      onClick = props.onClick,
      id = props.id;
  return React.createElement(Button, {
    onClick: onClick,
    disabled: disabled,
    className: classes.iconButton,
    id: id,
    isButtonIcon: true
  }, children);
};

export default withStyles({
  index: 0,
  withTheme: true
})(IconButton);