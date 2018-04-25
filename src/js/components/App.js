// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component<{}, {}> {

  doSearch = (data: string) => {
    console.log('do search', data);
  }

  render() {
    return (
      <div className='app__inner'>
        <Header onSearch={this.doSearch} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
