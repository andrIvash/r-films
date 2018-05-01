// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';
import { views, routes, get } from '../helpers';

type State = {
  view: string,
  films: [],
  selectedGenre: string,
  posterData: {},
};

class App extends Component<{}, State> {

  state = {
    view: views.COMMON,
    films: [],
    selectedGenre: 'Drama',
    posterData: {},
  }

  componentDidMount() {
    get(`${routes.base}/movies`)
      .then((response) => {
        console.log('Success!', response);
        this.setState({ films: response.data });
      }, (error) => {
        console.warn('Failed!', error);
      });
  }

  onFilmSelect = (id: number): void => {
    console.log('select');
    console.log(id);

    this.setState({
      view: views.POSTER,
      posterData: this.state.films.find(film => film.id === id),
      selectedGenre: this.state.films.find(film => film.id === id).genres[0],
    });
  }

  doSearch = (data: string, filter: string) => {
    console.log('do search', data, filter);
    get(`${routes.base}/movies`, {
      search: data,
      searchBy: filter,
    }).then((response) => {
      console.log('Success!', response);
      this.setState({ films: response.data });
    }, (error) => {
      console.warn('Failed!', error);
    });
  }

  toSearch = () => {
    console.log('to search');
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
