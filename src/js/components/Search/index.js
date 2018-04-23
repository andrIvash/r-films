// @flow
import React, { Component } from 'react';

type Props = {};

type State = {
  count: number,
};

class Search extends Component<Props, State> {
  render() {
    return (
      <div className='search app__search'>
        <h1 className='search__title'> Find your movie </h1>
        <div className='search__input-wrapper input-group mb-3'>
          <input
            aria-label='Search'
            className='search__input form-control'
            name='search'
            placeholder='Search phrase'
            type='text'
          />
          <div className='search__sign'>
            <svg height='484.5px' viewBox='0 0 484.5 484.5' width='484.5px' x='0px' y='0px'>
              <g>
                <g id='keyboard-return'>
                  <polygon points='433.5,114.75 433.5,216.75 96.9,216.75 188.7,124.95 153,89.25 0,242.25 153,395.25 188.7,359.55 96.9,267.75
                    484.5,267.75 484.5,114.75'
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className='search__controls'>
          <button className='search__submit' type='button'> Search </button>
        </div>
      </div>
    );
  }
}

export default Search;
