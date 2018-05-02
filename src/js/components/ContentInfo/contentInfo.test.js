import React from 'react';
import ContentInfo from './index';

describe('ContentInfo', () => {
  it('should be defined', () => {
    expect(ContentInfo).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = shallow(
      <ContentInfo
        films={[]}
        onFilmSelect={() => {}}
      /> );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render child elements', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const wrapper = shallow(
      <ContentInfo
        films={arr}
        onFilmSelect={() => {}}
      /> );
    expect(wrapper.find('.film-list').children().length).toEqual(arr.length);
  });
  it('should render warning title if no data passed', () => {
    const wrapper = shallow(
      <ContentInfo
        films={[]}
        onFilmSelect={() => {}}
      /> );
    expect(wrapper.find('.film-list').children().length).toEqual(1);
    expect(wrapper.find('.no-data').text()).toBe('No films found');
  });
});
