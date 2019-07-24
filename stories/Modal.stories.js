import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Components
import { ACEPrimaryTheme, Button, ButtonGroup, ModalDialog } from '../src/lib/package/components';

import ElementContainer from '../src/lib/internal/ElementContainer/ElementContainer';
import  StoryIntroduction from '../src/lib/internal/StoryIntroduction/StoryIntroduction';
import  StoryLayoutContainer from '../src/lib/internal/StoryLayoutContainer/StoryLayoutContainer';
import  StoryUsageDescription from '../src/lib/internal/StoryUsageDescription/StoryUsageDescription';

const stories = storiesOf('Molecules|ModalDialog', module);

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { modal1Open: false, modal2Open: false };
  }

   handleModal = (key,value) => {
        this.setState({ [key]: value });
   }
    
  render () {
   const { modal1Open, modal2Open } = this.state;

   const buttonGroupWithTwoButton =  <ButtonGroup>
                                        <Button color='primary' onClick={() => this.handleModal('modal1Open',false)}>Yes</Button>
                                        <Button color='primary' onClick={() => this.handleModal('modal1Open',false)}>No</Button>
                                      </ButtonGroup>;

   const buttonGroupWithOneButton =  <ButtonGroup>
                                        <Button color='primary' onClick={() => this.handleModal('modal2Open',false)}>Close</Button>
                                      </ButtonGroup>;

    const longDescription = <Fragment>  {[...new Array(50)]
                                .map(
                                  () => `Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                )
                                .join('\n')}
                            </Fragment>;

    const shortDescription = <Fragment>Description. Usually for important <br/> message that needs to interrupt user flow.</Fragment>;

    return (

      <ACEPrimaryTheme>
            <StoryLayoutContainer>
              <StoryIntroduction
                elementName="Dialog"
              />
            </StoryLayoutContainer>

            <StoryLayoutContainer>
        <StoryUsageDescription
          positive
          usageText="Tooltip usage"
          items={[
            'To validate user decisions or to gain full attention to something more important',
            'When you need a user response, to reveal critical infirmation, or to show info without losing the overall context of a page',
          ]}
        />

        <StoryUsageDescription
            usageText="Tooltip DON'Ts"
            items={[
                'Do not use to show error, success or warning separateMessageFromStack. Keep them on the page',
            ]}
         />

        <StoryUsageDescription
            usageText="Important Notes!"
            items={[
                'You can include HTML tags on the description and title',
                'Title props is just optional',
            ]}
         />
      </StoryLayoutContainer>
              <ElementContainer>
                <div className="u-flex--center">
                <Button color='primary' onClick={() => this.handleModal('modal1Open',true)}>
                  Open dialog
                </Button>
                <ModalDialog 
                  actionButtons={buttonGroupWithTwoButton} 
                  actionMessage='Confirmation message' 
                  description={longDescription} 
                  onClose={() => this.handleModal('modal1Open',false)} 
                  openModal={modal1Open} 
                  id='sampleModalId' 
                  title='Sample title' />
                </div>
              </ElementContainer>
              <br/><br/>

              <StoryLayoutContainer>
                <StoryUsageDescription
                      positive
                      usageText="Dialog with one button"
                      items={[
                        'This can be used if you will show information that does not need action',
                      ]}
                  />
              </StoryLayoutContainer>
  
              <ElementContainer>
                <div className="u-flex--center">
                <Button color='primary' onClick={() => this.handleModal('modal2Open',true)}>
                  Open dialog
                </Button>
                <ModalDialog 
                  actionButtons={buttonGroupWithOneButton} 
                  actionMessage='Confirmation message' 
                  description={shortDescription} 
                  onClose={() => this.handleModal('modal2Open',false)} 
                  openModal={modal2Open}
                  transitionDuration={200}
                  id='sampleModalId' />
                </div>
              </ElementContainer>
            </ACEPrimaryTheme>
    );
  }
}

stories.add('Modal', () => {
  return <ModalContainer />;
});