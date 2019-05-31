import React from 'react';
import { shallow } from 'enzyme';
import { AttentionGrabber, default as About } from './About';

describe('the About component', () => {
    it('renders', () => {
        const mount = shallow(<About />);
        expect(mount).not.toBeNull();
    });

    describe('the AttentionGrabber class', () => {
        it('renders', () => {
            const mount = shallow(<AttentionGrabber iconName="cloud" title="title" info="info" />);
            expect(mount).not.toBeNull();
            expect(mount.find('Icon').prop('name')).toBe('cloud');
            expect(mount.find('.attentionGrabber-title').text()).toBe('title');
            expect(mount.find('.attentionGrabber-info').text()).toBe('info');
        });
    });
})
