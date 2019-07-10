/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// Components
import { ACEPrimaryTheme, Link as TextLink, Tooltip } from '../src/lib/package/components';

// Internal
import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import  StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import  StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import  StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';

const stories = storiesOf('Molecules|Link', module);

const title =<p>How did we calculate your mileage?</p>;

const description = <p>
                        We based the average annual on the one-way and number of days commuting per week you provided. Then we
                        added X% for other daily and weekend driving.<br /> Lastly, we added x miles to the account for longer trips
                        and rounded to the nearest thousand.
                    </p>;

stories
  .addDecorator(withKnobs)
  
  .add('tooltip', () => (
    <ACEPrimaryTheme>
        <StoryLayoutContainer>
        <StoryIntroduction
          elementName="Tooltip"
        />
      </StoryLayoutContainer>

      <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="Tooltip usage"
          items={[
            'On providing additional help or information',
          ]}
        />

        <StoryUsageDescription
            positive={false}
            usageText="Tooltip DON'Ts"
            items={[
                'If the information is too long where user needs to scroll to read',
            ]}
         />

        <StoryUsageDescription
            positive={false}
            usageText="Important Notes!"
            items={[
                'You can include HTML tags on the description and title',
                'Always use top and/or buttom placement for short links',
                'Material UI will automatically set the placement to the opposite side if the placement choosen is not suitable to the view. For example, if you set bottom-end but the tooltip will not fit below the link it will show on the top-end',
                'placement is the props where you can programatically set where the tooltip will show.',
                'Arrow will only show screen size between 768 to 1440',
            ]}
         />

        <StoryUsageDescription
            positive
            usageText="List of available placement"
            items={[
                'top-start',
                'top',
                'top-end',
                'bottom-start',
                'bottom',
                'bottom-end',
            ]}
         />
      </StoryLayoutContainer>

      <ElementContainer>
        <div>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text &nbsp;
                <div  style={{ display: 'inline-block' }}>
                <Tooltip description={description} title={title}  placement='bottom-end'>
                    <TextLink color='primary' component='button' onClick={() => { }} target='none'>
                        sample for top-end placement
                    </TextLink>
                </Tooltip> </div> <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
        </div>
        </ElementContainer>
        <ElementContainer>
        <div>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                <div  style={{ display: 'inline-block' }}>
                <Tooltip description={description} title={title}  placement='bottom-start'>
                    <TextLink color='primary' component='button' onClick={() => { }} target='none'>
                        sample for top-start placement
                    </TextLink>
                </Tooltip> </div> Sample text Sample text <br />
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
        </div>
    </ElementContainer>
    <ElementContainer>
        <div>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample<div  style={{ display: 'inline-block' }}> <Tooltip description={description} title={title}  placement='bottom'>
                    <TextLink color='primary' component='button' onClick={() => { }} target='none'>
                        sample for top placement
                    </TextLink>
                </Tooltip> </div> Sample text Sample <br />
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
                Sample text Sample text Sample text Sample text Sample text Sample text <br/>
 
        </div>
    </ElementContainer>
  </ACEPrimaryTheme>
  )
);
