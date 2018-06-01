import { selectDataFilter } from '../selectDataFilter';
import * as actions from '../../actions/index';

let defaultState = {};

describe('selectDataFilter reducer', () => {
  beforeEach(() => {
    defaultState.selected = 'release';
  });
  it('should return the initial state', () => {
    expect(selectDataFilter(undefined, {}))
      .toEqual(defaultState);
  });
  it('should handle SELECT_DATA_FILTER', () => {
    expect(selectDataFilter({}, {
      type: actions.SELECT_DATA_FILTER,
      value: 'filter',
    })).toEqual({ selected: 'filter' });
  });
});
