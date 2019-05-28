import React, { Component } from 'react';


type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  items: PropTypes.array,
  children: PropTypes.node,
  className?: PropTypes.string
};


export default class SelectList extends Component {
  render() {
    return (
      <div className="selectlist">
        { this.props.children }
      </div>
    )
  }
}
