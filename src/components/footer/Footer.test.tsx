import React from 'react';
import { shallow } from 'enzyme';
import {FooterLink, default as Footer} from './Footer';

describe('the Hero component', () => {
    let links: FooterLink[];

    beforeEach(() => {
        links = [];
    });

    it('renders', () => {
        const mount = shallow(<Footer links={links}></Footer>);
        expect(mount).not.toBeNull();
    });

    it('renders the correct links', () => {
        links = [
            {iconId: 'home', uri: '/'},
            {iconId: 'bolt', uri: '/bolt/'},
            {iconId: 'react', uri: '/react/'},
        ]
        const mount = shallow(<Footer links={links}></Footer>);

        let linkAnchors = mount.find('.footer-links-link')
        expect(linkAnchors).toHaveLength(3);
        
        expect(linkAnchors.at(0).prop('href')).toBe('/');
        expect(linkAnchors.at(0).find('Icon').prop('name')).toBe('home');
        
        expect(linkAnchors.at(1).prop('href')).toBe('/bolt/');
        expect(linkAnchors.at(1).find('Icon').prop('name')).toBe('bolt');
        
        expect(linkAnchors.at(2).prop('href')).toBe('/react/');
        expect(linkAnchors.at(2).find('Icon').prop('name')).toBe('react');
    });

});
