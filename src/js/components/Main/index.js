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
        <div className='container'>
          content
        </div>
      </main>
    );
  }
}

export default Content;
