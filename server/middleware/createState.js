import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../../src/js/reducers';

const createState = (activeRoute, data, query) => (
  new Promise((resolve, reject) => {
    const initialState = {
      selectDataFilter: {selected: 'release'},
      changeSearchFilter: {searchFilter: 'title'},
    };

    switch (activeRoute) {
      case 'main':
        initialState.items = data.data;
        break;
      case 'film':
        initialState.changeView = {view: 'POSTER'};
        initialState.items = data.items;
        initialState.selectFilm = {
          posterData: data.single,
          selectedGenre: data.single.genres[0],
        };
        break;
      case 'search':
        initialState.changeView = {view: 'COMMON'};
        initialState.items = data.data;
        initialState.changeSearchFilter = {searchFilter: query.searchBy ? query.searchBy : 'title'};
        initialState.changeSearchText = {searchText: query.search ? query.search : ''};
        break;
      default:
        initialState.items = data.data  ;
    }
    try {
      const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk),
      );
      return resolve(store);
    } catch (err) {return reject(err);}
  }));

export default createState;
