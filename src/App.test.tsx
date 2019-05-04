import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('the App component', () => {
  it('renders without crashing', () => {
    const mount = shallow(<App />);
    expect(mount).not.toBeNull();
  });
  
  it('renders a header', () => {
    const mount = shallow(<App />);
    expect(mount.find('div.header')).not.toBeNull();
  });
  
  it('renders three containers', () => {
    const mount = shallow(<App />);
    expect(mount.find('div.container')).toHaveLength(3);
  });
})
