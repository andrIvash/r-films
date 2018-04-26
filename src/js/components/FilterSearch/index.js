// @flow
import React from 'react';

type Props = {
 onChange: (data: string) => void
}

const FilterSearch = props => (
  <div className='filter-search'>
    <div className='filter-search__title'>Search By</div>
    <div className='btn-group-toggle'>
      <label className='filter-search__label btn btn-secondary' htmlFor='genre'>
        <input
          autoComplete='off'
          className='filter-search__btn'
          id='genre'
          name='options'
          onClick={props.onChange}
          type='radio'
        /> Genre
      </label>
      <label className='filter-search__label btn btn-secondary' htmlFor='title'>
        <input
          autoComplete='off'
          className='filter-search__btn'
          id='title'
          name='options'
          onClick={props.onChange}
          type='radio'
        /> Title
      </label>
    </div>
  </div>
);

export default FilterSearch;
