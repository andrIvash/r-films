import React from 'react';
import FilmItem from './index';
import renderer from 'react-test-renderer';

let props = {};

jest.mock('react-router-dom/Link', () => 'router-link');
jest.mock('react-router-dom/NavLink', () => 'nav-link');

describe('FilmItem', () => {
  beforeEach(()=> {
    props = {
      film: {
        poster_path: 'http://test',
        release_date: '1924',
        title: 'title',
        genres: ['drama'],
      },
      id: 22,
      onFilmSelect: jest.fn(),
    };
  });
  it('should be defined', () => {
    expect(FilmItem).toBeDefined();
  });
  it('should render correctly', () => {
    const wrapper = renderer.create(
      <FilmItem {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render write values ', () => {
    const wrapper = shallow(
      <FilmItem {...props} /> );
    expect(wrapper.find('.film-item__img')
      .getElement().props.src).toBe('http://test');
    expect(wrapper.find('.film-item__title').text()).toBe('title');
    expect(wrapper.find('.film-item__year').text()).toBe('1924');
  });

  it(`should calls onFilmSelect with an argument 
    when FilmItem is clicked`, () => {
    const wrapper = shallow(
      <FilmItem {...props} /> );
    wrapper.simulate('click');
    expect(props.onFilmSelect).toHaveBeenCalledTimes(1);
    expect(props.onFilmSelect).toHaveBeenCalledWith(22);
  });
});
