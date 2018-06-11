// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilms, selectFilm, changeView } from '../actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import helpers from '../helpers';
import type { Film, PosterData, View } from '../flow-types.js';

type Props = {
  fetchData: (url: string,
    query?: {search: string, searchBy: string}) => Array<Film> | null,
  films: Array<Film>,
  hasErrored: boolean,
  isLoading: boolean,
  selectedGenre: string,
  view: View,
  posterData: PosterData,
  onChangeView: () => {},
  onFilmSelect: (id: number) => {}
};

export class App extends Component<Props, {}> {

  doSearch = (data: string, filter: string) => {
    this.props.fetchData(`${helpers.routes.base}/movies`, {
      search: data,
      searchBy: filter,
    });
  }

  render() {
    const {
      selectedGenre,
      view,
      posterData,
      onChangeView,
      onFilmSelect,
      hasErrored,
      isLoading,
      films,
    } = this.props;

    if (hasErrored) {
      return (
        <div className='app__inner'>
          <ErrorBoundary>
            <div className='main-error'>
              Sorry! There was an error loading the items
            </div>
          </ErrorBoundary>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className='app__inner'>
          <ErrorBoundary>
            <Header
              onSearch={this.doSearch}
              posterData={posterData}
              toSearch={onChangeView}
              view={view}
            />
            <main className='content app__main'>
              <p className='loading'>Loading…</p>
            </main>
            <Footer />
          </ErrorBoundary>
        </div>
      );
    }
    return (
      <div className='app__inner'>
        <ErrorBoundary>
          <Header
            onSearch={this.doSearch}
            posterData={posterData}
            toSearch={onChangeView}
            view={view}
          />
          <Main
            films={films}
            genre={selectedGenre}
            onFilmSelect={onFilmSelect}
            view={view}
          />
          <Footer />
        </ErrorBoundary>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url, query) => dispatch(getFilms(url, query)),
    onFilmSelect: id => dispatch(selectFilm(id)),
    onChangeView: () => dispatch(changeView()),
  };
};

const mapStateToProps = state => {
  return {
      films: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
      posterData: state.selectFilm.posterData,
      selectedGenre: state.selectFilm.selectedGenre,
      view: state.changeView.view,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
