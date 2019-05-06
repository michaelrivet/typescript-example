import React from 'react';
import { shallow } from 'enzyme';
import {Link, NavbarProps, default as Navbar} from './Navbar';

describe('the Navbar component', () => {
  let links: Link[];

  beforeEach(() => {
    links = [];
  });

  it('renders', () => {
    const mount = shallow(<Navbar links={links} />);
    expect(mount).not.toBeNull();
  });

  it('renders the sticky menu when isSticky is true', () => {
    const mount = shallow(<Navbar links={links} isSticky={true}/>);
    
    const menu = mount.find('Menu');
    expect(menu.prop('fixed')).toBe('top');
    expect(menu.prop('text')).toBe(false);
    expect(menu.prop('color')).toBe('olive');
    expect(menu.hasClass('navbar--isSticky')).toBe(true);
    expect(menu.hasClass('navbar--isFixed')).toBe(false);
  });

  it('renders the fixed menu when isSticky is false', () => {
    const mount = shallow(<Navbar links={links} isSticky={false}/>);
    
    const menu = mount.find('Menu');
    expect(menu.prop('fixed')).toBe(undefined);
    expect(menu.prop('text')).toBe(true);
    expect(menu.prop('color')).toBe(undefined);
    expect(menu.hasClass('navbar--isSticky')).toBe(false);
    expect(menu.hasClass('navbar--isFixed')).toBe(true);
  });

  it('renders the correct links', () => {
    links = [
      {displayText: 'Home', uri: '/', isActive: true},
      {displayText: 'About', uri: '/about/'},
      {displayText: 'Contact', uri: '/contact/'},
    ]
    const mount = shallow(<Navbar links={links} />);

    let menu = mount.find('Menu')
    expect(menu.prop('widths')).toBe(3);
    menu = menu.dive();
    expect(menu.find('MenuItem')).toHaveLength(3);
    
    expect(menu.find('MenuItem').at(0).prop('name')).toBe('Home');
    expect(menu.find('MenuItem').at(0).prop('href')).toBe('/');
    expect(menu.find('MenuItem').at(0).prop('active')).toBe(true);
    
    expect(menu.find('MenuItem').at(1).prop('name')).toBe('About');
    expect(menu.find('MenuItem').at(1).prop('href')).toBe('/about/');
    expect(menu.find('MenuItem').at(1).prop('active')).toBe(undefined);
    
    expect(menu.find('MenuItem').at(2).prop('name')).toBe('Contact');
    expect(menu.find('MenuItem').at(2).prop('href')).toBe('/contact/');
    expect(menu.find('MenuItem').at(2).prop('active')).toBe(undefined);
  });
})
