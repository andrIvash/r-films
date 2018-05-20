import { createStore } from 'redux';
import rootReducer from '../index.js';

describe('changeSearchFilter reducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    expect(store.getState().items).toEqual([]);
    expect(store.getState().itemsHasErrored).toEqual(false);
    expect(store.getState().itemsIsLoading).toEqual(false);
    expect(store.getState().changeView).toEqual({ view: 'COMMON' });
    expect(store.getState().selectFilm).toEqual({
      posterData: {
        title: '',
        poster_path: '',
        vote_average: 0,
        tagline: '',
        release_date: '',
        overview: '' },
      selectedGenre: 'Drama' });
    expect(store.getState().selectDataFilter).toEqual({ selected: 'release' });
    expect(store.getState().filterData).toEqual([]);
    expect(store.getState().changeSearchFilter)
      .toEqual({ searchFilter: 'title' });
    expect(store.getState().changeSearchText).toEqual({ searchText: '' });
  });
});
