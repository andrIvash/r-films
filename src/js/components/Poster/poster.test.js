import React from 'react';
import Poster from './index';

const props = {
  data: {
    vote_average: 'http://test',
    release_date: '1924',
    title: 'title',
    tagline: 'tagline',
    runtime: 100,
  },
};

describe('Poster', () => {
  it('should be defined', () => {
    expect(Poster).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <Poster {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render write values ', () => {
    const wrapper = shallow(
      <Poster {...props} /> );
    expect(wrapper.find('.film__title').text()).toBe('title');
    expect(wrapper.find('.film__year').text()).toBe('1924');
  });
});
