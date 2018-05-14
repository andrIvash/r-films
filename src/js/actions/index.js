import helpers from '../helpers';
import type { Film } from '../flow-types.js';
/*
 * action types
 */

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SELECT_FILM = 'SELECT_FILM';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CHANGE_VIEW_POSTER = 'CHANGE_VIEW_POSTER';
export const SELECT_SEARCH_FILTER = 'SELECT_SEARCH_FILTER';
export const SELECT_DATA_FILTER = 'SELECT_DATA_FILTER';
export const FILTER_DATA = 'FILTER_DATA';
export const CHANGE_SEARCH_FILTER = 'CHANGE_SEARCH_FILTER';
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';

/*
 * action creators
 */
export const clearSearchText = () => {
  return {
    type: CLEAR_SEARCH_TEXT,
  };
};

export const changeSearchText = (elem: HTMLElement) => {
  return {
    type: CHANGE_SEARCH_TEXT,
    value: elem.value,
  };
};

export const changeSearchFilter = (elem: HTMLElement) => {
  return {
    type: CHANGE_SEARCH_FILTER,
    value: elem.value,
  };
};

export const selectDataFilter = (elem: HTMLElement) => {
  return {
    type: SELECT_DATA_FILTER,
    value: elem.value,
  };
};

export const changeView = (type = CHANGE_VIEW) => ({
  type: type,
});

export const filterData = () => (dispatch, getState) => {
  const state = getState();
  const filterValue = state.selectDataFilter.selected;
  const filteredData = state.items.sort((a, b): any => (
    filterValue === 'rating' ?
      a.vote_average < b.vote_average :
      a.release_date.substr(0, 4) < b.release_date.substr(0, 4)));

  return dispatch({
    type: FILTER_DATA,
    filteredFilms: filteredData,
  });
};

export const selectFilm = id => (dispatch, getState) => {
  const state = getState();
  const selectedFilm = state.items.find((film:Film) => film.id === id);
  const selectedGenre: string = selectedFilm ? selectedFilm.genres[0] : '';
  dispatch(changeView(CHANGE_VIEW_POSTER));
  dispatch(getFilms(`${helpers.routes.base}/movies`, {
    search: selectedGenre,
    searchBy: 'genres',
  }));
  return dispatch({
      type: SELECT_FILM,
      film: selectedFilm,
      genre: selectedGenre,
  });
};


export const itemsIsLoading = bool => ({
  type: ITEMS_IS_LOADING,
  isLoading: bool,
});

export const receiveFilms = items => ({
  type: RECEIVE_FILMS,
  items,
});

export const itemsHasErrored = bool => ({
  type: ITEMS_HAS_ERRORED,
  hasErrored: bool,
});

export const getFilms = (request, query) => dispatch => {

  dispatch(itemsIsLoading(true));
  helpers.getData(request, query)
    .then(response => {
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => {
      dispatch(receiveFilms(response.data));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

