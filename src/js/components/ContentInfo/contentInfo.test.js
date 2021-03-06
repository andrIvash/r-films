import React from 'react';
import renderer from 'react-test-renderer';
import ContentInfo from './index';

let props = {};

jest.mock('../FilmItem', () => 'film-item');

describe('ContentInfo', () => {
  beforeEach(()=> {
    props = {
      films: [
        {id: 1, title: 'title', release_date: '1992', genres: ['Drama']},
        {id: 2, title: 'title2', release_date: '1994', genres: ['Drama']},
      ],
      onFilmSelect: () => {},
    };
  });
  it('should be defined', () => {
    expect(ContentInfo).toBeDefined();
  });
  it('should render correctly', () => {
    jest.mock('react-router', () => 'react-router');
    const wrapper = renderer.create(<ContentInfo {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render child elements', () => {
    const wrapper = shallow( <ContentInfo {...props} /> );
    expect(wrapper.find('.film-list')
      .children())
      .toHaveLength(props.films.length);
  });
  it('should render warning title if no data passed', () => {
    props.films = [];
    const wrapper = shallow( <ContentInfo {...props} /> );
    expect(wrapper.find('.film-list').children()).toHaveLength(1);
    expect(wrapper.find('.no-data').text()).toBe('No films found');
  });
});
