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
  onFilmSelect: () => {}
};

<<<<<<< HEAD
export class App extends Component<Props, {}> {

  componentDidMount() {
    this.props.fetchData(`${helpers.routes.base}/movies`);
=======
class App extends Component<{}, State> {

  state = {
    view: helpers.views.COMMON,
    films: [],
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
    this.sendQuery(`${helpers.routes.base}/movies`);
  }

  onFilmSelect = (id: number): void => {
    const film = this.state.films.find(film => film.id === id);
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

  sendQuery = (url: string, query?: {search?: string, searchBy?: string}) => {
    helpers.getData(url, query).then((response) => {
      this.setState({ films: response.data });
    }).catch((e) => {
      console.warn('error:', e);
    });
>>>>>>> source
  }

  doSearch = (data: string, filter: string) => {
    console.log('do search', data, filter);
<<<<<<< HEAD
    this.props.fetchData(`${helpers.routes.base}/movies`, {
=======
    this.sendQuery(`${helpers.routes.base}/movies`, {
>>>>>>> source
      search: data,
      searchBy: filter,
    });
  }

<<<<<<< HEAD
=======
  toSearch = () => {
    this.setState({
      view: helpers.views.COMMON,
    });
  }

>>>>>>> source
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
