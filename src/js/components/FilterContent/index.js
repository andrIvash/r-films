// @flow
import React, { Component } from 'react';

type Props = {
 onFilterSelect: (ev: SynteticInputIvent) => void,
 selected: string
}

export default class FilterContent extends Component<Props> {

  _onFilterSelect = event => this.props.onFilterSelect(event.target.value);

  render() {
    const { selected } = this.props;
    return (
      <div className='filter-content'>
        <div className='filter-content__title'>Sort By</div>
        <div className='filter-content__group'>
          <label
            className={selected === 'release' ?
            'filter-content__label active' :
            'filter-content__label'}
            htmlFor='release'
            >
            <input
              autoComplete='off'
              className='filter-content__input'
              id='release'
              name='filter'
              onChange={this._onFilterSelect}
              type='radio'
              value='release'
            /> release date
          </label>
          <label
            className={selected === 'rating' ?
            'filter-content__label active' :
            'filter-content__label'}
            htmlFor='rating'
            >
            <input
              autoComplete='off'
              className='filter-content__input'
              id='rating'
              name='filter'
              onChange={this._onFilterSelect}
              type='radio'
              value='rating'
            /> rating
          </label>
        </div>
      </div>
    );
  }
}
