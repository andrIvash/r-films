import helpers from '../helpers';
/*
 * action types
 */

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * action creators
 */

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

export const getFilms = request => dispatch => {
  dispatch(itemsIsLoading(true));
  helpers.getData(request)
    .then(response => {
      dispatch(itemsIsLoading(false));
      return response;
    })
    .then(response => {
      dispatch(receiveFilms(response.data));
    })
    .catch(() => dispatch(itemsHasErrored(true)));
};

