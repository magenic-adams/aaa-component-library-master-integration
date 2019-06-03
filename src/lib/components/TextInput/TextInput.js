import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput/BaseInput';

class TextInput extends Component {
  render() {
    return (
      <Fragment>
        <BaseInput
          {...this.props}
        />
      </Fragment>
    );
  }
}

TextInput.propTypes = {
  // Passed Props
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClear: PropTypes.func
};

export default TextInput;
