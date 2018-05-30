import { createStore } from 'redux';
import rootReducer from '../index.js';

describe('changeSearchFilter reducer', () => {
  it('should return the initial state', () => {
    const store = createStore(rootReducer);
    expect(store.getState()).toMatchSnapshot();
  });
});
