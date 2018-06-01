import React from 'react';
import configureMockStore from 'redux-mock-store';
import helpers from '../helpers';
import CombinedApp, { App } from './App';

const mockStore = configureMockStore();

let wrapper,
  props = {};

describe('App', () => {
  beforeEach(() => {
    props.fetchData = jest.fn();
    props.onFilmSelect = jest.fn();
    props.onChangeView = jest.fn();
    wrapper = shallow(<App {...props} />);
  });

  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when doSearch emmit', () => {
    expect(props.fetchData).toHaveBeenCalledTimes(1);
    wrapper.find('Header').props().onSearch('data', 'filter');
    expect(props.fetchData).toHaveBeenCalledTimes(2);
    expect(props.fetchData.mock.calls[1][1])
      .toEqual({search: 'data', searchBy: 'filter'});
  });

  it('should emit onChangeView when toSearch emmit', () => {
    wrapper.find('Header').props().toSearch();
    expect(props.onChangeView).toHaveBeenCalledTimes(1);
  });

  it('should emit onFilmSelect when onFilmSelect emmit', () => {
    wrapper.find('Connect').props().onFilmSelect();
    expect(props.onFilmSelect).toHaveBeenCalledTimes(1);
  });

  it('should component have proper props', () => {
    expect(wrapper.find('Header').props()).toHaveProperty('posterData');
    expect(wrapper.find('Header').props()).toHaveProperty('view');
  });
});

describe('CombinedApp', () => {
    let wrapper, store;

    beforeEach(() => {
      const initialState = {
        films: [
          {id: 1, title: 'title', release_date: '1992', genres: ['Drama']},
          {id: 2, title: 'title2', release_date: '1994', genres: ['Drama']},
        ],
        hasErrored: false,
        isLoading: false,
        selectFilm: {
          posterData: {},
          selectedGenre: 'Drama',
        },
        changeView: {
          view: helpers.views.COMMON,
        },
      };
      store = mockStore(initialState);
      wrapper = shallow(
        <CombinedApp store={store} />,
      );
    });

    it('should change the view with proper action', () => {
      wrapper.simulate('changeView');
      const actions = store.getActions();
      expect(actions).toEqual([ { type: 'CHANGE_VIEW' } ]);
    });

});
