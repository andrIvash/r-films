// @flow

import { SELECT_DATA_FILTER } from '../actions';

const defaultState: {
  selected: string,
} = {
  selected: 'release',
};

export const selectDataFilter = (state: {selected: string} = defaultState,
  action: { type: string, value: string }) => {
    const { type, value } = action;
    switch (type) {
      case SELECT_DATA_FILTER: {
        return {
          selected: value,
        };
      }

      default:
        return state;
    }
};
