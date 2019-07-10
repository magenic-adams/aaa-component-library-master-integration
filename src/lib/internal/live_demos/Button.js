import {
  ACEPrimaryTheme,
  Button,
} from '../../package/components';

export const demo = `class ButtonDemo extends React.Component {
  constructor(props){
    super(props);
    this.handlePrimaryClick = this.handlePrimaryClick.bind(this);
    this.handleSecondaryClick = this.handleSecondaryClick.bind(this);
  }
  
  handlePrimaryClick(){
    console.log('clicked primary');
  }

  handleSecondaryClick(){
    console.log('clicked secondary');
  }

  render(){
    return (
      <ACEPrimaryTheme>
        <Button
          id="main-btn"
          className="my-class-name"
          fadeUp
          onClick={this.handlePrimaryClick}
        >
          Primary
        </Button>
        <Button
          id="main-secondary-btn"
          color="secondary"
          className="my-class-name"
          onClick={this.handleSecondaryClick}
        >
          Secondary button
        </Button>
      </ACEPrimaryTheme>  
    );
  }
}`;

export const scope = {
  ACEPrimaryTheme,
  Button,
};
