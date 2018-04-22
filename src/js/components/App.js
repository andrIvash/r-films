// @flow
import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component<{}, {}> {
  render() {
    return (
      <div className='app__inner'>
        <div className='app__content'>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
