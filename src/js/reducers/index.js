import { combineReducers } from 'redux';
import { REQUEST_FILMS, RECEIVE_FILMS } from '../actions';
import helpers from '../helpers';

const films = (state = {
  view: helpers.views.COMMON,
  selectedGenre: 'Drama',
  posterData: {
    title: '',
    poster_path: '',
    vote_average: 0,
    tagline: '',
    release_date: '',
    overview: '',
  },
  isFetching: false,
  films: [],
}, action) => {
  switch (action.type) {
    case REQUEST_FILMS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_FILMS:
      return {
        ...state,
        isFetching: false,
        films: action.items,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  films,
});

export default rootReducer;
