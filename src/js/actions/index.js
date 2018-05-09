import helpers from '../helpers';
/*
 * action types
 */

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const REQUEST_FILM = 'REQUEST_FILM';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * action creators
 */

export const requestFilms = request => ({
  type: REQUEST_FILMS,
  request,
});

export const receiveFilms = response => ({
  type: RECEIVE_FILMS,
  items: response.data,
});

const getFilms = request => dispatch => {
  dispatch(requestFilms(request));
  return helpers.getFilms(`${helpers.routes.base}/movies`)
    .then(response => dispatch(receiveFilms(response)));
};

export const getFilmsIfNeeded = request => (dispatch, getState) => {
  const { films, isFetching } = getState();
  if (!films || isFetching) {
    return dispatch(getFilms(request));
  }
  return getState();
};
