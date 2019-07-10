import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import '../src/css/helpers.css';

// Components
import { ACEPrimaryTheme, BaseInput, NumericInput } from '../src/lib/package/components';

import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';

const stories = storiesOf('Atomic|Input', module);

stories
  .addDecorator(withKnobs)
  .add('Input', () => {
    return (
      <ACEPrimaryTheme>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/z1pbb8angqpq4mq/00inputheader.png?dl=1" alt="rules"/>
        </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/z63xbp8dmurch8v/01whentouse.png?dl=1" alt="rules"/>
        </div>


      <div className="u-max-width--1024 u-center">
        <ElementContainer>
          <BaseInput 
            id="enabledId" 
            name="enabledName" 
            helperText="Enabled Helper Text" 
            labelName="Enabled Label" 
            value="Enabled"
            onBlur={action('blur')} 
            onClear={action('clear')} 
            onChange={action('change')}
          />
        </ElementContainer>

        <ElementContainer>
          <BaseInput 
            disabled 
            id="disabledId" 
            helperText="Disabled Helper Text" 
            labelName="Disabled Label" 
            name="disabledName" 
            value="Disabled"
            onChange={action('change')} 
            onClear={action('clear')} 
            onBlur={action('blur')}
          />
        </ElementContainer>

        <ElementContainer>
          <BaseInput 
            id="errorId" 
            helperText="Error Helper Text" 
            name="errorName"
            error="This is an error"
            value="(@20"
            onBlur={action('blur')} 
            onChange={action('change')} 
            onClear={action('clear')}
          />
        </ElementContainer>
          <ElementContainer>
            <BaseInput 
            id="enabledId" 
            name="enabledName" 
            helperText={text('Input Helper Text', 'Change the Helper Text')} 
            labelName={text('Text Label', 'Change the Label')} 
            value={text('Text Value', 'Change the Value')}
            onBlur={action('blur')} 
            onChange={action('change')} 
            onClear={action('clear')} />
          </ElementContainer>

          <ElementContainer>
            <NumericInput 
            id="numericId" 
            name="numericName" 
            helperText={text('Numeric Helper Text', 'Change the Helper Text')} 
            labelName={text('Numeric Label', 'Change the label')} 
            value={text('Numeric Value', 12301991)}
            mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, ' ', '/', ' ', /\d/, /\d/, /\d/, /\d/]}
            onBlur={action('blur')} 
            onChange={action('change')} 
            onClear={action('clear')}  
            />
          </ElementContainer>
      </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/o8eq3x2lpbd3wwv/02states.png?dl=1" alt="rules"/>
        </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/8r1boiz3vqmelya/03-1anatomy-breakpoints.png?dl=1" alt="rules"/>
        </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/3850hozhaj0o9ug/03-2anatomy-states.png?dl=1" alt="rules"/>
        </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/jau40r826yzhhbq/03-3anatomy-spacing.png?dl=1" alt="rules"/>
        </div>
        <div className="u-center u-max-width--1024">
          <img className="u-width--full" src="https://www.dropbox.com/s/lzva5wt44nutsmv/04behaviors.png?dl=1" alt="rules"/>
        </div>
      </ACEPrimaryTheme>
    );
  });
