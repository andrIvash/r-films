import React from 'react';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import helpers from '../helpers';
import CombinedApp, { App } from './App';

const mockStore = configureMockStore();

jest.mock('./Header', () => 'header');
jest.mock('./Footer', () => 'footer');
jest.mock('./Main', () => 'main');
jest.mock('./ErrorBoundary', () => 'error-boundary');

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
    const wrapper = renderer.create(<App {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should emit search when doSearch emmit', () => {
    wrapper.find('header').props().onSearch('data', 'filter');
    expect(props.fetchData).toHaveBeenCalledTimes(1);
    expect(props.fetchData.mock.calls[0][1])
      .toEqual({search: 'data', searchBy: 'filter'});
  });

  it('should emit onChangeView when toSearch emmit', () => {
    wrapper.find('header').props().toSearch();
    expect(props.onChangeView).toHaveBeenCalledTimes(1);
  });

  it('should component have proper props', () => {
    expect(wrapper.find('header').props()).toHaveProperty('posterData');
    expect(wrapper.find('header').props()).toHaveProperty('view');
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
