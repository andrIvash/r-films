import { changeSearchFilter } from '../changeSearchFilter';
import * as actions from '../../actions/index';

let defaultState = {};

describe('changeSearchFilter reducer', () => {
  beforeEach(() => {
    defaultState.searchFilter = 'title';
  });
  it('should return the initial state', () => {
    expect(changeSearchFilter(undefined, {}))
      .toEqual({ searchFilter: 'title' });
  });
  it('should handle CHANGE_SEARCH_FILTER', () => {
    expect(changeSearchFilter({}, {
      type: actions.CHANGE_SEARCH_FILTER,
      value: 'rating'})).toEqual({ searchFilter: 'rating' });
  });
});
