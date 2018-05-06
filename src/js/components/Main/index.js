// @flow
import React, { Component } from 'react';
import ContentInfo from '../ContentInfo';
import ExtraInfo from '../ExtraInfo';
import FilterContent from '../FilterContent';
import helpers from '../../helpers';

type Props = {
  onFilterSelect: (ev: SynteticInputIvent) => void,
  onFilmSelect: (ev: SynteticInputIvent) => void,
  films: [],
  view: string,
  genre: string
};

type State = {
  selected: string,
};

class Content extends Component<Props, State> {
  state = {
    selected: 'rating',
  }

  onFilterSelect = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { target } = event;
    console.log(target.value);
    this.setState({
      selected: target.value,
    });
  }

  filterData = () => {
    return this.props.films.sort((a, b) => {
      return this.state.selected === 'rating' ?
        a.vote_average > b.vote_average :
        a.release_date.substr(0,4) < b.release_date.substr(0,4);
    });
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
            data={view === helpers.views.POSTER ? genre : films.length.toString()}
            view={view}
          />
          {this.showFilter()}
        </div>
      );
    }
    return null;
  }

  render() {
    const { onFilmSelect } = this.props;

    return (
      <main className='content app__main'>
        <div className='content__top'>
          <div className='container'>
            {this.renderExtraInfo()}
          </div>
        </div>
        <div className='container'>
          <ContentInfo
            films={this.filterData()}
            onFilmSelect={onFilmSelect}
          />
        </div>
      </main>
    );
  }
}

export default Content;
