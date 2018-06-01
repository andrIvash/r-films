// @flow
import React, { Component } from 'react';

type Props = {
 changeFilter: (elem: HTMLElement) => void,
 selected: string
}

export default class FilterSearch extends Component<Props> {

  _changeFilter = event => this.props.changeFilter(event.target.value);

  render() {
    const { selected } = this.props;
    return (
      <div className='filter-search'>
        <div className='filter-search__title'>Search By</div>
        <div className='btn-group-toggle'>
          <label
            className={selected === 'genres' ?
            'filter-search__label btn btn-secondary active' :
            'filter-search__label btn btn-secondary'}
            htmlFor='genre'
            >
            <input
              autoComplete='off'
              className='filter-search__btn'
              id='genre'
              name='options'
              onChange={this._changeFilter}
              type='radio'
              value='genres'
            /> Genre
          </label>
          <label
            className={selected === 'title' ?
            'filter-search__label btn btn-secondary active' :
            'filter-search__label btn btn-secondary'}
            htmlFor='title'
            >
            <input
              autoComplete='off'
              className='filter-search__btn'
              id='title'
              name='options'
              onChange={this._changeFilter}
              type='radio'
              value='title'
            /> Title
          </label>
        </div>
      </div>
    );
  }
}

