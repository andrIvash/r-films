// @flow

import { SELECT_FILM } from '../actions';
import type { Film, PosterData } from '../flow-types.js';

const defaultState: {
  selectedGenre: string,
  posterData: PosterData,
} = {
  posterData: {
    title: '',
    poster_path: '',
    vote_average: 0,
    tagline: '',
    release_date: '',
    overview: '',
  },
  selectedGenre: 'Drama',
};

export const selectFilm = (state: {} = defaultState,
  action: {type: string, genre: string, film: Film}) => {
    const { type, genre, film } = action;
    switch (type) {
      case SELECT_FILM: {
        return {
          posterData: film,
          selectedGenre: genre,
        };
      }
      default:
        return state;
    }
};
