// @flow
import React, { Component } from 'react';
import * as sign from './enterSign.svg';

type Props = {
  submitSearch: (data: string) => void,
};

type State = {
  searchText: string
};

class Search extends Component<Props, State> {
  state = {
    searchText: '',
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  }

  handleKeyPress = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    const data = this.state.searchText;
    if (data.length > 0) {
      this.props.submitSearch(data);
      this.setState({
        searchText: '',
      });
    }
  }

  render() {
    return (
      <div className='search app__search'>
        <h1 className='search__title'> Find your movie </h1>
        <div className='search__input-wrapper input-group mb-3'>
          <input
            aria-label='Search'
            className='search__input form-control'
            name='search'
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Search phrase...'
            type='text'
            value={this.state.searchText}
          />
          <img alt='search sign' className='search__sign' src={sign} />
        </div>
        <div className='search__controls'>
          <button
            className='search__submit'
            onClick={this.handleSearch}
            type='button'
            > Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
