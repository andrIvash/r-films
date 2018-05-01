// @flow
import React, { Component } from 'react';
import * as sign from './enterSign.svg';
import FilterSearch from '../FilterSearch';
import SearchButton from '../SearchButton';

type Props = {
  submitSearch: (data: string, filter:string) => void
};

type State = {
  searchText: string,
  searchFilter: string,
};

class Search extends Component<Props, State> {
  state = {
    searchText: '',
    searchFilter: 'title',
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
      this.props.submitSearch(data, this.state.searchFilter);
      this.setState({
        searchText: '',
      });
    }
  }

  changeFilter = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { target } = event;
    console.log(target.value);
    this.setState({
      searchFilter: target.value,
    });
  }

  render() {
    const { searchFilter, searchText } = this.state;
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
            value={searchText}
          />
          <img alt='search sign' className='search__sign' src={sign} />
        </div>
        <div className='search__controls'>
          <FilterSearch
            onChange={this.changeFilter}
            selected={searchFilter}
          />
          <SearchButton handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default Search;
