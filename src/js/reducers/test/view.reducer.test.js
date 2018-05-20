import { changeView } from '../view';
import * as actions from '../../actions/index';
import helpers from '../../helpers';

let defaultState = {};

describe('changeView reducer', () => {
  beforeEach(() => {
    defaultState.view = helpers.views.COMMON;
  });
  it('should return the initial state', () => {
    expect(changeView(undefined, {}))
      .toEqual(defaultState);
  });
  it('should handle CHANGE_VIEW when state is common view', () => {
    expect(changeView({view: helpers.views.COMMON}, {
      type: actions.CHANGE_VIEW,
    })).toEqual({ view: helpers.views.POSTER });
  });
  it('should handle CHANGE_VIEW when state is poster view', () => {
    expect(changeView({view: helpers.views.POSTER}, {
      type: actions.CHANGE_VIEW,
    })).toEqual({ view: helpers.views.COMMON });
  });
  it('should handle CHANGE_VIEW_POSTER', () => {
    expect(changeView({}, {
      type: actions.CHANGE_VIEW_POSTER,
    })).toEqual({ view: helpers.views.POSTER });
  });
});
