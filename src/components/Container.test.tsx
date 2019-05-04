import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('the Container component', () => {
  it('renders without crashing', () => {
    const mount = shallow(<Container isFullScreen displayType={"primary"}><div></div></Container>);
    expect(mount).not.toBeNull();
  });
})
