import React from 'react';
import 'jest-styled-components';
import ExtraInfo from './index';

let props = {};

describe('ExtraInfo', () => {
  beforeEach(()=> {
    props = {
      data: '',
      view: '',
    };
  });
  it('should be defined', () => {
    expect(ExtraInfo).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = render(
      <ExtraInfo {...props} /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render right values in POSTER view', () => {
    props.data = 'Drama';
    props.view = 'POSTER';

    const wrapper = shallow(
      <ExtraInfo {...props} /> );

    expect(wrapper.find('ExtraContent').children().text())
      .toBe('Films by Drama genre');
  });
  it('should render right values in COMMON view', () => {
    props.data = '9';
    props.view = 'COMMON';

    const wrapper = shallow(
      <ExtraInfo {...props} /> );

    expect(wrapper.find('ExtraContent').children().text())
      .toBe('9 movies found');
  });
});
