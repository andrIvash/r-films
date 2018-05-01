// @flow
import React from 'react';

type Props = {
 onChange: (ev: SynteticInputIvent) => void,
 selected: string
}

const FilterSearch = (props: Props) => (
  <div className='filter-search'>
    <div className='filter-search__title'>Search By</div>
    <div className='btn-group-toggle'>
      <label
        className={props.selected === 'genres' ?
        'filter-search__label btn btn-secondary active' :
        'filter-search__label btn btn-secondary'}
        htmlFor='genre'
        >
        <input
          autoComplete='off'
          className='filter-search__btn'
          id='genre'
          name='options'
          onChange={props.onChange}
          type='radio'
          value='genres'
        /> Genre
      </label>
      <label
        className={props.selected === 'title' ?
        'filter-search__label btn btn-secondary active' :
        'filter-search__label btn btn-secondary'}
        htmlFor='title'
        >
        <input
          autoComplete='off'
          className='filter-search__btn'
          id='title'
          name='options'
          onChange={props.onChange}
          type='radio'
          value='title'
        /> Title
      </label>
    </div>
  </div>
);

export default FilterSearch;
