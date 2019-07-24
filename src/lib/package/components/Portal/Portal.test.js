import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ACEPrimaryTheme, Link as TextLink, Portal } from '..';

describe('Portal', () => {
    let createPortalComponent;
    function createPortal() {
 
        return mount(
            <ACEPrimaryTheme>
                <Portal id="SamplePortalId">
                    <TextLink id='SampleId'>Sample Link</TextLink>
                </Portal>
            </ACEPrimaryTheme>
        );
    }

    beforeEach(() => {
        createPortalComponent = createPortal();
    });
    
    afterEach(() => {
        createPortalComponent.unmount();
    });

    describe('Render Portal', () => {
        it('Portal is rendered', () => {
            expect(createPortalComponent.find('#SamplePortalId').length).to.equal(1);
        });

        it('Portal with link is rendered', () => {
            expect(createPortalComponent.find('Link').length).to.equal(1);
        });
    });
});