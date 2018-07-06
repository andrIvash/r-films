import React from 'react';
import 'jest-styled-components';
import Logo from './index';

describe('Logo', () => {
  it('should be defined', () => {
    expect(Logo).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <Logo /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a proper logo', () => {
    const wrapper = shallow(
      <Logo /> ).dive();
    expect(wrapper.text())
      .toBe('netflixroulette');
  });
});
