// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import helpers from '../helpers';
import type { Film, PosterData, View } from '../flow-types.js';

type State = {
  view: View,
  selectedGenre: string,
  posterData: PosterData,
};

type Props = {
  fetchData: (url: string) => Array<Film> | null,
  films: Array<Film>,
  hasErrored: boolean,
  isLoading: boolean,
};

class App extends Component<Props, State> {

  state = {
    view: helpers.views.COMMON,
    selectedGenre: 'Drama',
    posterData: {
      title: '',
      poster_path: '',
      vote_average: 0,
      tagline: '',
      release_date: '',
      overview: '',
    },
  }

  componentDidMount() {
    this.props.fetchData(`${helpers.routes.base}/movies`);
  }

  onFilmSelect = (id: number): void => {
    const film = this.props.films.find(film => film.id === id);
    const genre = film ? film.genres[0] : '';

    this.setState({
      view: helpers.views.POSTER,
      posterData: film,
      selectedGenre: genre,
    });
    this.sendQuery(`${helpers.routes.base}/movies`, {
      search: genre,
      searchBy: 'genres',
    });
  }

  // sendQuery = (url: string, query?: {search?: string, searchBy?: string}) =>
    // {
    // helpers.getData(url, query).then((response) => {
    //   this.setState({ films: response.data });
    // }).catch((e) => {
    //   console.warn('error:', e);
    // });
  // }

  doSearch = (data: string, filter: string) => {
    console.log('do search', data, filter);
    this.sendQuery(`${helpers.routes.base}/movies`, {
      search: data,
      searchBy: filter,
    });
  }

  toSearch = () => {
    this.setState({
      view: helpers.views.COMMON,
    });
  }

  render() {
    const {
      selectedGenre,
      view,
      posterData,
    } = this.state;

    const {hasErrored, isLoading, films} = this.props;

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
      return <p>Loading…</p>;
    }
    return (
      <div className='app__inner'>
        <ErrorBoundary>
          <Header
            onSearch={this.doSearch}
            posterData={posterData}
            toSearch={this.toSearch}
            view={view}
          />
          <Main
            films={films}
            genre={selectedGenre}
            onFilmSelect={this.onFilmSelect}
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
      fetchData: (url) => dispatch(getFilms(url)),
    };
};

const mapStateToProps = state => {
  return {
      films: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

