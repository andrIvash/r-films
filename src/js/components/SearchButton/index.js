// @flow
import React from 'react';

type Props = {
 handleSearch: (ev: SynteticInputIvent) => void,
}

const SearchButton = (props: Props) => (
  <button
    className='search-button btn btn-lg btn-primary'
    onClick={props.handleSearch}
    type='button'
    > Search
  </button>
);

export default SearchButton;
