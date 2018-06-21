import React from 'react';
import Logo from './index';

jest.mock('react-router-dom/NavLink', () => 'nav-link');
jest.mock('react-router-dom/Link', () => 'router-link');

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
      <Logo /> );
    expect(wrapper.find('.logo').text())
      .toBe('netflixroulette');
  });
});
