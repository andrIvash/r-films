import React from 'react';
import { MemoryRouter } from 'react-router';
import FilmItem from './index';

let props = {};

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
    jest.mock('react-router/memoryRouter', () => 'memory-router');
    const wrapper = render(
      <MemoryRouter>
        <FilmItem {...props} />
      </MemoryRouter>);
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
