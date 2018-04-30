// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { views, routes } from '../helpers';

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
    error: '',
  }

  componentDidMount() {
    fetch(`${routes.base}/movies`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ films: data.data }))
      .catch(error => this.setState({ error: error }));
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

  doSearch = (data: string) => {
    console.log('do search', data);
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
      </div>
    );
  }
}

export default App;
