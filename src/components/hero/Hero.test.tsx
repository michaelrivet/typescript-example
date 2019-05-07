import React from 'react';
import { shallow } from 'enzyme';
import {HeroProps, default as Hero} from './Hero';

describe('the Hero component', () => {
  it('renders', () => {
    const mount = shallow(<Hero displayType={"primary"}><div></div></Hero>);
    expect(mount).not.toBeNull();
  });

  describe('the displayType class', () => {
      const testCases: HeroProps['displayType'][] = ['primary', 'secondary', 'inverse', 'transparent'];
      testCases.forEach(displayType => {
        it(`adds the Hero--${displayType} class`, () => {
            const mount = shallow(<Hero isFullScreen={false} displayType={displayType}><div></div></Hero>);
            expect(mount.find('div.hero').hasClass('hero--fullscreen')).toBe(false);
        })
    })
  });

  it('does not add the Hero--fullscreen class when isFullScreen is false', () => {
    const mount = shallow(<Hero isFullScreen={false} displayType={"primary"}><div></div></Hero>);
    expect(mount.find('div.hero').hasClass('hero--fullscreen')).toBe(false);
  });

  it('adds the Hero--fullscreen class when isFullScreen is true', () => {
    const mount = shallow(<Hero isFullScreen displayType={"primary"}><div></div></Hero>);
    expect(mount.find('div.hero').hasClass('hero--fullscreen')).toBe(true);
  });

  it('renders the children', () => {
    const mount = shallow(<Hero isFullScreen displayType={"primary"}><div className="child"></div></Hero>);
    expect(mount.find('div.child')).not.toBeNull;
  });
})
