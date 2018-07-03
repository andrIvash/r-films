import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import helpers from '../helpers';
import * as actions from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions clearSearchText', () => {
  it('should create an action to clear search text', () => {
    const expectedAction = {
      type: actions.CLEAR_SEARCH_TEXT,
    };
    expect(actions.clearSearchText()).toEqual(expectedAction);
  });
});

describe('actions changeSearchText', () => {
  it('should create an action to change search text', () => {
    const expectedAction = {
      type: actions.CHANGE_SEARCH_TEXT,
      value: 'text',
    };
    expect(actions.changeSearchText('text')).toEqual(expectedAction);
  });
});

describe('actions changeSearchFilter', () => {
  it('should create an action to change search filter', () => {
    const expectedAction = {
      type: actions.CHANGE_SEARCH_FILTER,
      value: 'genre',
    };
    expect(actions.changeSearchFilter('genre')).toEqual(expectedAction);
  });
});

describe('actions selectDataFilter', () => {
  it('should create an action to change data filter', () => {
    const expectedAction = {
      type: actions.SELECT_DATA_FILTER,
      value: 'rating',
    };
    expect(actions.selectDataFilter('rating')).toEqual(expectedAction);
  });
});

describe('actions changeView', () => {
  it('should create an action to change view', () => {
    const expectedAction = {
      type: actions.CHANGE_VIEW,
    };
    expect(actions.changeView(actions.CHANGE_VIEW)).toEqual(expectedAction);
  });
});

describe('actions filterData', () => {
  it('should create an action to filter data', () => {
    const store = mockStore({
      selectDataFilter: {selected: 'rating'},
      items: [
        {id: 1, release_date: '1924', vote_average: 8},
        {id: 2, release_date: '1934', vote_average: 9},
      ],
    });
    const expectedAction = {
      type: actions.FILTER_DATA,
      filteredFilms: [
        {id: 2, release_date: '1934', vote_average: 9},
        {id: 1, release_date: '1924', vote_average: 8},
      ],
    };
    expect(store.dispatch(actions.filterData())).toEqual(expectedAction);
  });
});

describe('actions selectFilm', () => {
  it('should select current film from data', () => {
    const store = mockStore({
      selectDataFilter: {selected: 'rating'},
      items: [
        {id: 1, release_date: '1924', vote_average: 8, genres: ['Drama']},
      ],
    });
    const expectedActions = {
      type: actions.SELECT_FILM,
      film: {id: 1, release_date: '1924', vote_average: 8, genres: ['Drama']},
      genre: 'Drama',
    };
    expect(store.dispatch(actions.selectFilm(1)))
      .toEqual(expectedActions);
  });
});

describe('actions itemsIsLoading', () => {
  it('should create an action when items is loading', () => {
    const expectedAction = {
        type: actions.ITEMS_IS_LOADING,
        isLoading: true,
    };
    expect(actions.itemsIsLoading(true)).toEqual(expectedAction);
  });
});

describe('actions receiveFilms', () => {
  it('should create an action when items received', () => {
    const expectedAction = {
        type: actions.RECEIVE_FILMS,
        items: [],
    };
    expect(actions.receiveFilms([])).toEqual(expectedAction);
  });
});

describe('actions itemsHasErrored', () => {
  it('should create an action when items do not received', () => {
    const expectedAction = {
      type: actions.ITEMS_HAS_ERRORED,
      hasErrored: true,
    };
    expect(actions.itemsHasErrored(true)).toEqual(expectedAction);
  });
});

describe('actions getFilms', () => {
  it('should create an action while getting film ', () => {
    helpers.getData = jest.fn()
      .mockReturnValue(Promise.resolve({
          data: [],
      }));
    const store = mockStore({});
    const expectedActions = [
      { type: actions.ITEMS_IS_LOADING, isLoading: true },
      { type: actions.ITEMS_IS_LOADING, isLoading: false },
       { type: actions.RECEIVE_FILMS, items: [] },
    ];
    return store.dispatch(actions.getFilms()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
   });
  });
});
