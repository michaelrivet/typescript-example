import React from 'react';
import { shallow } from 'enzyme';
import PageSection from './PageSection';

describe('the PageSection component', () => {
    it('renders', () => {
        const mount = shallow(<PageSection title="foo"><div/></PageSection>);
        expect(mount).not.toBeNull();
    });

    it('renders a h2 with the title', () => {
        const mount = shallow(<PageSection title="foo"><div/></PageSection>);
        expect(mount.find('h2').text()).toBe('foo');
    });

    it('renders a h4 with the subtitle if it exists', () => {
        const mount = shallow(<PageSection title="foo" subTitle="bar"><div/></PageSection>);
        expect(mount.find('h4').text()).toBe('bar');
    });

    it('does not render a h4 if subtitle does not exist', () => {
        const mount = shallow(<PageSection title="foo"><div/></PageSection>);
        expect(mount.find('h4')).toHaveLength(0);
    });

    it('renders the children', () => {
      const mount = shallow(<PageSection title="foo"><div className="child"></div></PageSection>);
      expect(mount.find('div.child')).not.toBeNull;
    });
})
