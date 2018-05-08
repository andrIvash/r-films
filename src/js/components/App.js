// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { views, routes, get } from '../helpers';
import type { Film, PosterData, View } from '../flow-types.js';

type State = {
  view: View,
  films: Array<Film>,
  selectedGenre: string,
  posterData: PosterData,
};

class App extends Component<{}, State> {

  state = {
    view: views.COMMON,
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
    this.sendQuery(`${routes.base}/movies`);
  }

  onFilmSelect = (id: number): void => {
    const film = this.state.films.find(film => film.id === id);
    const genre = film ? film.genres[0] : '';

    this.setState({
      view: views.POSTER,
      posterData: film,
      selectedGenre: genre,
    });
    this.sendQuery(`${routes.base}/movies`, {
      search: genre,
      searchBy: 'genres',
    });
  }

  sendQuery = (url: string, query?: {search?: string, searchBy?: string}) => {
    get(url, query).then((response) => {
      this.setState({ films: response.data });
    }).catch((e) => {
      console.warn('error:', e);
    });
  }

  doSearch = (data: string, filter: string) => {
    console.log('do search', data, filter);
    this.sendQuery(`${routes.base}/movies`, {
      search: data,
      searchBy: filter,
    });
  }

  toSearch = () => {
    this.setState({
      view: views.COMMON,
    });
  }

  render() {
    const {
      films,
      selectedGenre,
      view,
      posterData,
    } = this.state;

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

export default App;
