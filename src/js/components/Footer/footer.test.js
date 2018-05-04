import React from 'react';
import Footer from './index';

describe('Footer', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Footer /> );
    expect(wrapper).toMatchSnapshot();
  });
});
