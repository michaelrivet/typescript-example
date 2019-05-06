import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Container from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

describe('the App component', () => {
  it('renders', () => {
    const mount = shallow(<App />);
    expect(mount).not.toBeNull();
  });
  
  it('renders a Navbar', () => {
    const mount = shallow(<App />);
    expect(mount.find(Navbar)).not.toBeNull();
  });
  
  it('renders four containers', () => {
    const mount = shallow(<App />);
    expect(mount.find(Container)).toHaveLength(4);
  });
})
