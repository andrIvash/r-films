// @flow
import React from 'react';

type Props = {
 onFilterSelect: (ev: SynteticInputIvent) => void,
 selected: string
}

const FilterContent = (props: Props) => (
  <div className='filter-content'>
    <div className='filter-content__title'>Sort By</div>
    <div className='filter-content__group'>
      <label
        className={props.selected === 'release' ?
        'filter-content__label active' :
        'filter-content__label'}
        htmlFor='release'
        >
        <input
          autoComplete='off'
          className='filter-content__input'
          id='release'
          name='filter'
          onChange={(ev) => props.onFilterSelect(ev.target.value)}
          type='radio'
          value='release'
        /> release date
      </label>
      <label
        className={props.selected === 'rating' ?
        'filter-content__label active' :
        'filter-content__label'}
        htmlFor='rating'
        >
        <input
          autoComplete='off'
          className='filter-content__input'
          id='rating'
          name='filter'
          onChange={(ev) => props.onFilterSelect(ev.target.value)}
          type='radio'
          value='rating'
        /> rating
      </label>
    </div>
  </div>
);

export default FilterContent;
