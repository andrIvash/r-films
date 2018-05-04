import React from 'react';
import ExtraInfo from './index';

const props = {
  data: '',
  view: '',
};

describe('ExtraInfo', () => {
  it('should be defined', () => {
    expect(ExtraInfo).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <ExtraInfo {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render right values in POSTER view', () => {
    const props = {
      data: 'Drama',
      view: 'POSTER',
    };
    const wrapper = shallow(
      <ExtraInfo {...props} /> );

    expect(wrapper.find('.extra-info__content')
      .text())
      .toBe('Films by Drama genre');
  });
  it('should render right values in COMMON view', () => {
    const props = {
      data: '9',
      view: 'COMMON',
    };
    const wrapper = shallow(
      <ExtraInfo {...props} /> );

    expect(wrapper.find('.extra-info__content')
      .text())
      .toBe('9 movies found');
  });
});
