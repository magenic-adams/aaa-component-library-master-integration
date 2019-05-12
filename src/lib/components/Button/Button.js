import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialButton from '@material-ui/core/Button';

// CSS
import './Button.css';

type propTypes = {
  children?: PropTypes.string | PropTypes.node,
  color?: 'primary' | 'secondary' | 'default',
  href?: PropTypes.bool,
  onClick: () => {}
};


class Button extends Component<propTypes> {
  static defaultProps = {
    color: 'primary'
  }

  render() {
    const {
      children,
      color,
      href,
      onClick
    } = this.props;
    return (
      <MaterialButton
        className="Button"
        color={color}
        variant="contained"
        href={href}
        onClick={onClick}
      >
        {children}
      </MaterialButton>
    );
  }
}

export default Button;
