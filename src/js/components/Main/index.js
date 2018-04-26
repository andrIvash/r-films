// @flow
import React, { Component } from 'react';

type Props = {};

type State = {
  count: number,
};

class Content extends Component<Props, State> {
  render() {
    return (
      <main className='content app__main'>
        <div className='content__top'>
          <div className='container'> 
          </div>
        </div>
        <div className='container'> 
        </div>
      </main>
    );
  }
}

export default Content;
