import { changeSearchText } from '../changeSearchText';
import * as actions from '../../actions/index';

let defaultState = {};

describe('changeSearchText reducer', () => {
  beforeEach(() => {
    defaultState.searchText = '';
  });
  it('should return the initial state', () => {
    expect(changeSearchText(undefined, {}))
      .toEqual({ searchText: '' });
  });
  it('should handle CHANGE_SEARCH_TEXT', () => {
    expect(changeSearchText({}, {
      type: actions.CHANGE_SEARCH_TEXT,
      value: 'text'})).toEqual({ searchText: 'text' });
  });
  it('should handle CLEAR_SEARCH_TEXT', () => {
    expect(changeSearchText({}, {type: actions.CLEAR_SEARCH_TEXT}))
      .toEqual({ searchText: '' });
  });
});
