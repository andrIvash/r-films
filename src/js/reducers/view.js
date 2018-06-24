// @flow
import { CHANGE_VIEW,
  CHANGE_VIEW_POSTER, CHANGE_VIEW_COMMON } from '../actions';
import helpers from '../helpers';
import type { View } from '../flow-types.js';

const defaultState: {
  view: View,
} = {
  view: helpers.views.COMMON,
};

export const changeView = (state: {view: View} = defaultState,
  action: { type: string }) => {
    const { type } = action;
    switch (type) {
      case CHANGE_VIEW: {
        return {
          view: state.view === helpers.views.COMMON ?
            helpers.views.POSTER : helpers.views.COMMON,
        };
      }

      case CHANGE_VIEW_POSTER: {
        return {
          view: helpers.views.POSTER,
        };
      }

      case CHANGE_VIEW_COMMON: {
        return {
          view: helpers.views.COMMON,
        };
      }
      default:
        return state;
    }
};
