// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmsIfNeeded } from '../actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import helpers from '../helpers';
import type { Film, PosterData, View } from '../flow-types.js';

type State = {
  view: View,
  films: Array<Film>,
  selectedGenre: string,
  posterData: PosterData,
};

type Props = {
  dispatch: (func: ()=>{}) => {},
};

class App extends Component<Props, State> {

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
    const { dispatch } = this.props;
    dispatch(getFilmsIfNeeded(`${helpers.routes.base}/movies`));
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
  }

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

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App);

