import { action } from '@storybook/addon-actions';
import {
  AAAPrimaryTheme,
  SelectList,
} from '../../package/components';

export const demo = `class SelectListDemo extends React.Component {
  constructor(props){
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  static items(){
    return [
      { id: 1, value: 1, display: 'First Item' },
      { id: 2, value: 2, display: 'Second Item' },
      { id: 3, value: 3, display: 'Third Item ' },
      { id: 4, value: 4, display: '4th Item' },
      { id: 5, value: 5, display: '5th Item' },
      { id: 6, value: 6, display: '6th item' },
      { id: 7, value: 7, display: '7th Item' },
    ]
  };
  
  handleSelection(data){
    action(data);
    console.log('check console for data', data);
  }

  render(){
    return (
      <div>
        <AAAPrimaryTheme>
          <SelectList
            type="primary"
            items={SelectListDemo.items()}
            onSelect={this.handleSelection}
          />
        </AAAPrimaryTheme>
      </div>
    );
  }
}`;

export const scope = {
  AAAPrimaryTheme,
  SelectList,
  action,
};
