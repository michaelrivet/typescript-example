import React from 'react';
import { shallow } from 'enzyme';
import {ContainerProps, default as Container} from './Container';

describe('the Container component', () => {
  it('renders', () => {
    const mount = shallow(<Container displayType={"primary"}><div></div></Container>);
    expect(mount).not.toBeNull();
  });

  describe('the displayType class', () => {
      const testCases: ContainerProps['displayType'][] = ['primary', 'secondary', 'inverse', 'transparent'];
      testCases.forEach(displayType => {
        it(`adds the container--${displayType} class`, () => {
            const mount = shallow(<Container isFullScreen={false} displayType={displayType}><div></div></Container>);
            expect(mount.find('div.container').hasClass(`container--${displayType}`)).toBe(true);
        })
    })
  });

  it('does not add the container--fullscreen class when isFullScreen is false', () => {
    const mount = shallow(<Container isFullScreen={false} displayType={"primary"}><div></div></Container>);
    expect(mount.find('div.container').hasClass('container--fullscreen')).toBe(false);
  });

  it('adds the container--fullscreen class when isFullScreen is true', () => {
    const mount = shallow(<Container isFullScreen displayType={"primary"}><div></div></Container>);
    expect(mount.find('div.container').hasClass('container--fullscreen')).toBe(true);
  });

  it('renders the children', () => {
    const mount = shallow(<Container isFullScreen displayType={"primary"}><div className="child"></div></Container>);
    expect(mount.find('div.child')).not.toBeNull;
  });
})
