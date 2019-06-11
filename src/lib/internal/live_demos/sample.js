import React from 'react';
import Button from '../../components/Button/Button';

export default class Sample extends React.Component {
  render(){
    return (
      <Button>
        This is a sample button
      </Button>
    );
  }
}

Sample.scope = {
  Button,
  Sample,
};
