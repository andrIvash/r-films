import React from 'react';
import App from './App';
import SearchButton from './SearchButton';
import helpers from '../helpers';

let wrapper;

describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    helpers.getData = jest.fn()
      .mockReturnValue(Promise.resolve({
        data: [
          {id: 1, title: 'title', release_date: '1992', genres: ['Drama']},
          {id: 2, title: 'title2', release_date: '1994', genres: ['Drama']},
        ]},
      ));
  });
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when doSearch emmit', () => {
    wrapper.instance().doSearch('data', 'filter');
    expect(helpers.getData).toHaveBeenCalledTimes(1);
    expect(helpers.getData.mock.calls[0][1])
      .toEqual({search: 'data', searchBy: 'filter'});
  });

  it('should change state and send query when onFilmSelect emit', () => {
    wrapper.instance().setState({
      films: [{ id: 1, genres: ['Drama'] }],
    });
    wrapper.instance().onFilmSelect(1);
    expect(helpers.getData).toHaveBeenCalledTimes(1);
    expect(helpers.getData.mock.calls[0][1])
      .toEqual({search: 'Drama', searchBy: 'genres'});
  });

  it('should change view when toSearch emit', () => {
    let wrapper = mount( <App /> );
    wrapper.instance().setState({
      view: helpers.views.POSTER,
    });
    wrapper.update();
    wrapper.find(SearchButton).find('.search-button').simulate('click');
    expect(wrapper.state().view).toBe(helpers.views.COMMON);
  });

  it('should get data when send query emit', async () => {
    await wrapper.instance().sendQuery();
    expect(helpers.getData).toHaveBeenCalledTimes(1);
    expect(wrapper.state().films).toHaveLength(2);
  });
});
