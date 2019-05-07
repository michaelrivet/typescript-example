import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

describe('the App component', () => {
  it('renders', () => {
    const mount = shallow(<App />);
    expect(mount).not.toBeNull();
  });
  
  it('renders a Navbar component', () => {
    const mount = shallow(<App />);
    expect(mount.find(Navbar)).not.toBeNull();
  });
  
  it('renders four Hero components', () => {
    const mount = shallow(<App />);
    expect(mount.find(Hero)).toHaveLength(5);
  });
})
