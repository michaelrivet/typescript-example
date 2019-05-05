import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('the Navbar component', () => {
  it('renders', () => {
    const mount = shallow(<Navbar />);
    expect(mount).not.toBeNull();
  });
})
