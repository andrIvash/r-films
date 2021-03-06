import { combineReducers } from 'redux';
import {itemsHasErrored, itemsIsLoading, items } from './films';
import { selectFilm } from './film';
import { changeView } from './view';
import { selectDataFilter } from './selectDataFilter';
import { filterData } from './filterData';
import { changeSearchFilter } from './changeSearchFilter';
import { changeSearchText } from './changeSearchText';

const rootReducer = combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  changeView,
  selectFilm,
  selectDataFilter,
  filterData,
  changeSearchFilter,
  changeSearchText,
});

export default rootReducer;
