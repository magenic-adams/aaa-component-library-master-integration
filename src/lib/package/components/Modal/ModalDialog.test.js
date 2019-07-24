import React, { Fragment } from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ACEPrimaryTheme, Button, ButtonGroup, ModalDialog } from '..';

// constant
import { ACE_COLOR_MAIN_WHITE, ACE_COLOR_MAIN_BLACK } from '../../constants/colors';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

describe('ModalDialog', ()=>{
    const modalOpen= true;
    const id = 'sampleModalId';
    let createDialogComponent;

    const button =  <ButtonGroup>
                        <Button color='primary' id='buttonInsideModal' onClick={() => this.handleModal('modal1Open',false)}>Close</Button>
                    </ButtonGroup>;

    const description = <Fragment>Description. Usually for important <br/> message that needs to interrupt user flow.</Fragment>;

    function createComponent() {
        return mount(<ACEPrimaryTheme>
                    <Button color='primary' onClick={() => this.handleModal('modal1Open',true)}>
                        Open dialog
                    </Button>
                    <ModalDialog 
                        actionButtons={button} 
                        actionMessage='Confirmation message' 
                        description={description} 
                        onClose={() => this.handleModal('modal1Open',false)} 
                        openModal={modalOpen} 
                        id={id} 
                        title='Sample title' />
                    </ACEPrimaryTheme>
                    );
    };

    beforeEach(() => {
        createDialogComponent = createComponent();
    });

    afterEach(() => {
        createDialogComponent.unmount();
    });

    describe('Rendering ModalDialog component', () => {
        it('successfully rendred the modal', () => {
            expect(createDialogComponent.find('ModalDialog').length).to.equal(1);
        });

        it('Buttongroup is inside the modal', () => {
            expect(createDialogComponent.find('div.ButtonGroup').length).to.equal(1);
        });
    });

    describe('ModalDialog styles', () => {
        it('Content styles', () => {
            const paragraph = createDialogComponent.find('p.MuiTypography-colorTextSecondary');
            
            const paddingStyle = getDOMNodeComputedStyle(paragraph.getDOMNode(), 'padding');
            const fontSizeStyle = getDOMNodeComputedStyle(paragraph.getDOMNode(), 'font-size');
            const textAlignStyle = getDOMNodeComputedStyle(paragraph.getDOMNode(), 'text-align');

            expect(paddingStyle).to.equal('16px 16px 0px');
            expect(fontSizeStyle).to.equal('16px');
            expect(textAlignStyle).to.equal('center');
        });

        it('Button styles', () => {
            const buttonComponent = createDialogComponent.find(`button[data-quid='buttonInsideModal']`); 
            
            const borderRadiusStyle = getDOMNodeComputedStyle(buttonComponent.getDOMNode(), 'border-radius');
            const backgroundStyle = getDOMNodeComputedStyle(buttonComponent.getDOMNode(), 'background');
            const colorStyle = getDOMNodeComputedStyle(buttonComponent.getDOMNode(), 'color');
            const widthStyle = getDOMNodeComputedStyle(buttonComponent.getDOMNode(), 'width');

            expect(borderRadiusStyle).to.equal('0');
            expect(backgroundStyle).to.equal(ACE_COLOR_MAIN_WHITE);
            expect(colorStyle).to.equal(ACE_COLOR_MAIN_BLACK);
            expect(widthStyle).to.equal('100%');

        });
    });
});