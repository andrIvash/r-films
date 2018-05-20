import { itemsHasErrored, itemsIsLoading, items } from '../films';
import * as actions from '../../actions/index';

describe('itemsHasErrored reducer', () => {
  it('should return the initial state', () => {
    expect(itemsHasErrored(undefined, {}))
      .toEqual(false);
  });
  it('should handle ITEMS_HAS_ERRORED', () => {
    expect(itemsHasErrored(false, {
      type: actions.ITEMS_HAS_ERRORED,
      hasErrored: true,
    })).toEqual(true);
  });
});

describe('itemsIsLoading reducer', () => {
  it('should return the initial state', () => {
    expect(itemsIsLoading(undefined, {}))
      .toEqual(false);
  });
  it('should handle ITEMS_IS_LOADING', () => {
    expect(itemsIsLoading(false, {
      type: actions.ITEMS_IS_LOADING,
      isLoading: true,
    })).toEqual(true);
  });
});

describe('items reducer', () => {
  it('should return the initial state', () => {
    expect(items(undefined, {}))
      .toEqual([]);
  });
  it('should handle RECEIVE_FILMS', () => {
    expect(items([], {
      type: actions.RECEIVE_FILMS,
      items: [1, 2, 3],
    })).toEqual([1, 2, 3]);
  });
});
