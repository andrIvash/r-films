import React from 'react';
import 'jest-styled-components';
import Footer from './index';

describe('Footer', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <Footer /> );
    expect(wrapper).toMatchSnapshot();
  });
});
