// @flow
import React, { Component } from 'react';
import ContentInfo from '../ContentInfo';
import ExtraInfo from '../ExtraInfo';
import FilterContent from '../FilterContent';
import helpers from '../../helpers';
import type { Film, View } from '../../flow-types.js';

type Props = {
  onFilmSelect: (ev: SynteticInputIvent) => void,
  films: Array<Film>,
  view: View,
  genre: string
};

type State = {
  selected: string,
  filteredData: Array<Film>,
};

class Content extends Component<Props, State> {
  state = {
    selected: 'rating',
    filteredData: [],
  }

  onFilterSelect = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { target } = event;
    this.filterData(target.value);
    this.setState({
      selected: target.value,
    });
  }

  filterData = (selected: string):void => {
    const filteredData = this.props.films.sort((a, b): any => (
      selected === 'rating' ?
        a.vote_average < b.vote_average :
        a.release_date.substr(0, 4) < b.release_date.substr(0, 4)));
    this.setState({ filteredData });
  }

  showFilter = () => {
    const { view } = this.props;
    const { selected } = this.state;

    return view === helpers.views.POSTER ?
      null :
      <FilterContent
        onFilterSelect={this.onFilterSelect}
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
    const { onFilmSelect, films } = this.props;
    const { filteredData } = this.state;

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

export default Content;
