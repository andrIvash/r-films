// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentInfo from '../ContentInfo';
import ExtraInfo from '../ExtraInfo';
import FilterContent from '../FilterContent';
import helpers from '../../helpers';
import type { Film, View } from '../../flow-types.js';
import { filterData, selectDataFilter } from '../../actions';

type Props = {
  onFilmSelect: (ev: SyntheticInputEvent) => void,
  films: Array<Film>,
  view: View,
  genre: string
};

type State = {
  selected: string,
  filteredData: Array<Film>,
};

export class Main extends Component<Props, State> {

  showFilter = () => {
    const { view, onFilterSelect, selected } = this.props;

    return view === helpers.views.POSTER ?
      null :
      <FilterContent
        onFilterSelect={onFilterSelect}
        selected={selected}
      />;
  }

  renderExtraInfo = () => {
    const { films, view, genre } = this.props;

    if (films && films.length) {
      return (
        <div className='container'>
          <ExtraInfo
            data={view === helpers.views.POSTER ?
              genre :
              films.length.toString()}
            view={view}
          />
          {this.showFilter()}
        </div>
      );
    }
    return null;
  }

  render() {
    const { onFilmSelect, films, filteredData } = this.props;

    return (
      <main className='content app__main'>
        <div className='content__top'>
          <div className='container'>
            {this.renderExtraInfo()}
          </div>
        </div>
        <div className='container'>
          <ContentInfo
            films={filteredData && filteredData.length ? filteredData : films}
            onFilmSelect={onFilmSelect}
          />
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    onFilterSelect: (value: string) => {
      dispatch(selectDataFilter(value));
      dispatch(filterData());
    },
  });

const mapStateToProps = state => {
  return {
      selected: state.selectDataFilter.selected,
      filteredData: state.filterData.filteredFilms,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

