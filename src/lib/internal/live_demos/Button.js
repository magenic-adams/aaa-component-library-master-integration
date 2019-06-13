import {
  AAAPrimaryTheme,
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
      <AAAPrimaryTheme>
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
      </AAAPrimaryTheme>  
    );
  }
}`;

export const scope = {
  AAAPrimaryTheme,
  Button,
};
