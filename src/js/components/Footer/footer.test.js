import React from 'react';
import Footer from './index';
import renderer from 'react-test-renderer';

jest.mock('../Logo', () => 'logo');


describe('Footer', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = renderer.create(
      <Footer /> ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
