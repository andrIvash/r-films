// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as sign from './enterSign.svg';
import FilterSearch from '../FilterSearch';
import SearchButton from '../SearchButton';
import { changeSearchFilter,
  changeSearchText, clearSearchText } from '../../actions';

type Props = {
  submitSearch: (data: string, filter:string) => void,
  searchText: string,
  searchFilter: string,
  clearText: () => void,
  handleChange: (elem: HTMLElement) => void,
  changeFilter: (elem: HTMLElement) => void,
};

export class Search extends Component<Props> {

  handleKeyPress = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    const {searchText, searchFilter, clearText, submitSearch } = this.props;
    if (searchText.length > 0) {
      submitSearch(searchText, searchFilter);
      clearText();
    }
  }

  render() {
    const { searchText, changeFilter, searchFilter } = this.props;
    return (
      <div className='search app__search'>
        <h1 className='search__title'> Find your movie </h1>
        <div className='search__input-wrapper input-group mb-3'>
          <input
            aria-label='Search'
            className='search__input form-control'
            name='search'
            onChange={(ev) => {this.props.handleChange(ev.target.value);}}
            onKeyPress={this.handleKeyPress}
            placeholder='Search phrase...'
            type='text'
            value={searchText}
          />
          <img alt='search sign' className='search__sign' src={sign} />
        </div>
        <div className='search__controls'>
          <FilterSearch
            changeFilter={changeFilter}
            selected={searchFilter}
          />
          <SearchButton handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: (value) => dispatch(changeSearchFilter(value)),
    handleChange: (value) => dispatch(changeSearchText(value)),
    clearText: () => dispatch(clearSearchText()),
  };
};

const mapStateToProps = state => {
  return {
      searchFilter: state.changeSearchFilter.searchFilter,
      searchText: state.changeSearchText.searchText,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
