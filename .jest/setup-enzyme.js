import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// to support the popper of material UI tootlip
global.document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });

configure({ adapter: new Adapter() });
