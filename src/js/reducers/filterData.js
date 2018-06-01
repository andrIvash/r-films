// @flow

import { FILTER_DATA } from '../actions';
import type { Film } from '../flow-types.js';

export const filterData = (state: Array<Film> = [],
  action: {type: string, filteredFilms: Array<Film>}) => {
    switch (action.type) {
        case FILTER_DATA:
            return action.filteredFilms;

        default:
            return state;
    }
};
