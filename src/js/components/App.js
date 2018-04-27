// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { views } from '../helpers';


class App extends Component<{}, {}> {

  state = {
    view: views.POSTER,
    films: [1, 2, 3, 4],
  }

  onSelect = () => {
    console.log('select');
  }

  doSearch = (data: string) => {
    console.log('do search', data);
  }

  toSearch = () => {
    console.log('to search');
  }

  changeView = (elem: HTMLBodyElement) => {
    this.setState({
      view: views[elem.data.view],
    });
  }

  render() {
    return (
      <div className='app__inner'>
        <Header
          onSearch={this.doSearch}
          toSearch={this.toSearch}
          view={this.state.view}
        />
        <Main
          films={this.state.films}
          onSelect={this.onSelect}
          view={this.state.view}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
