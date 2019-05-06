import React from 'react';
import { shallow } from 'enzyme';
import {Link, NavbarProps, default as Navbar} from './Navbar';

describe('the Navbar component', () => {
  let links: Link[];

  beforeEach(() => {
    links = [];
  });

  it('renders', () => {
    const mount = shallow(<Navbar displayType="default" links={[]} />);
    expect(mount).not.toBeNull();
  });

  describe('the displayType class', () => {
      const testCases: NavbarProps['displayType'][] = ['default', 'narrow', 'wide'];
      testCases.forEach(displayType => {
        it(`adds the navbar--${displayType} class`, () => {
            const mount = shallow(<Navbar displayType={displayType} links={[]}/>);
            expect(mount.find('div.navbar').hasClass(`navbar--${displayType}`)).toBe(true);
        })
    })
  });

  it('renders the correct links', () => {
    links = [
      {displayText: 'Home', uri: '/'},
      {displayText: 'About', uri: '/about/'},
      {displayText: 'Contact', uri: '/contact/'},
    ]
    const mount = shallow(<Navbar displayType="default" links={[]} />);
    expect(mount).not.toBeNull();
    expect(mount.find('a')).toHaveLength(3);
  });
})
