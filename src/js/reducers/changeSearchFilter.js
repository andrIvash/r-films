// @flow

import { CHANGE_SEARCH_FILTER } from '../actions';

const defaultState: {
  searchFilter: string,
} = {
  searchFilter: 'title',
};

export const changeSearchFilter = (state: {searchFilter: string} = defaultState,
  action: { type: string, value: string }) => {
    const { type, value } = action;
    switch (type) {
      case CHANGE_SEARCH_FILTER: {
        return {
          searchFilter: value,
        };
      }

      default:
        return state;
    }
};
