import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Container from './components/container/Container';

describe('the App component', () => {
  it('renders', () => {
    const mount = shallow(<App />);
    expect(mount).not.toBeNull();
  });
  
  it('renders a header', () => {
    const mount = shallow(<App />);
    expect(mount.find('div.header')).not.toBeNull();
  });
  
  it('renders four containers', () => {
    const mount = shallow(<App />);
    expect(mount.find(Container)).toHaveLength(4);
  });
})
