import { filterData } from '../filterData';
import * as actions from '../../actions/index';

describe('filterData reducer', () => {
  it('should return the initial state', () => {
    expect(filterData(undefined, {}))
      .toEqual([]);
  });
  it('should handle FILTER_DATA', () => {
    expect(filterData([], {
      type: actions.FILTER_DATA,
      filteredFilms: [1, 2, 3],
    })).toEqual([1, 2, 3]);
  });
});
