/* global
  afterAll
  describe,
  it
*/
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

// Constants
import { ACE_COLOR_MAIN_BLACK } from '../../constants/colors';

// Test Utilities
import { getDOMNodeComputedStyle } from '../../../../../test/DOM';

// Components
import ACEPrimaryTheme from '../ACEPrimaryTheme/ACEPrimaryTheme';
import BulletList from './BulletList';

function createBulletListWithTheme(props = {}) {
  const ThemeBulletList = mount(
    <ACEPrimaryTheme>
      <BulletList {...props} />
    </ACEPrimaryTheme>
  );

  return ThemeBulletList;
}

describe('BulletList', () => {
  const props = {
    id: 'unique-identifier',
    className: 'client-BulletList-class',
    label: 'Label here',
    list: ['Label1', 'Label2'],
  };
  const BulletListWrapper = createBulletListWithTheme(props);
  const LabelNode = BulletListWrapper.find('label').getDOMNode();
  const ParentListNode = BulletListWrapper.find('ul').getDOMNode();

  afterAll(() => {
    BulletListWrapper.unmount();
  });

  describe('base styles', () => {
    describe('label', () => {
      it('has font color of ACE_COLOR_MAIN_BLACK', () => {
        const color = getDOMNodeComputedStyle(LabelNode, 'color');
        expect(color).to.equal(ACE_COLOR_MAIN_BLACK);
      });

      it('has font size of 16px', () => {
        const fontSize = getDOMNodeComputedStyle(LabelNode, 'font-size');
        expect(fontSize).to.equal('16px');
      });

      it('has font weight of 400', () => {
        const fontWeight = getDOMNodeComputedStyle(LabelNode, 'font-weight');
        expect(fontWeight).to.equal('400');
      });
    });

    describe('list items', () => {
      const listItem = BulletListWrapper.find('li')
        .at(0)
        .getDOMNode();
      it('has font color of ACE_COLOR_MAIN_BLACK', () => {
        const color = getDOMNodeComputedStyle(listItem, 'color');
        expect(color).to.equal(ACE_COLOR_MAIN_BLACK);
      });
    });
  });

  describe('html rendering', () => {
    it('has rendered label', () => {
      expect(LabelNode.text).to.equal(props.text);
    });

    it('Label has data attribute of data-quid passed to underlying html element', () => {
      expect(LabelNode.dataset.quid).to.equal(`Label-${props.id}`);
    });

    it('has rendered unordered list', () => {
      expect(ParentListNode.children.length).to.equal(props.list.length);

      const listItems = BulletListWrapper.find('li');
      listItems.forEach((element, index) => {
        expect(element.text()).to.equal(props.list[index]);
      });
    });

    it('Unordered list has data attribute of data-quid passed to underlying html element', () => {
      expect(ParentListNode.dataset.quid).to.equal(`BulletList-${props.id}`);
    });
  });
});
