// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import helpers from '../helpers';

type State = {
  view: string,
  films: [],
  selectedGenre: string,
  posterData: {},
};

class App extends Component<{}, State> {

  state = {
    view: helpers.views.COMMON,
    films: [],
    selectedGenre: 'Drama',
    posterData: {},
  }

  componentDidMount() {
    this.sendQuery(`${helpers.routes.base}/movies`);
  }

  onFilmSelect = (id: number): void => {
    console.log('select');
    console.log(id);
    const film = this.state.films.find(film => film.id === id);
    const genre = this.state.films.find(film => film.id === id).genres[0];

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
      console.log('Success!', response);
      this.setState({ films: response.data });
    }, (error) => {
      console.warn('Failed!', error);
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
    console.log('to search');
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

export default App;
