// @flow
import React, { Component } from 'react';
import ContentInfo from '../ContentInfo';
import ExtraInfo from '../ExtraInfo';

type Props = {
  onSelect: (ev: SynteticInputIvent) => void,
  films: [{name: string}],
  view: string
};

type State = {
  count: number,
};

class Content extends Component<Props, State> {

  render() {
    const { films, onSelect, view } = this.props;

    return (
      <main className='content app__main'>
        <div className='content__top'>
          <div className='container'>
            <ExtraInfo view={view} />
          </div>
        </div>
        <div className='container'>
          <ContentInfo
            films={films}
            onSelect={onSelect}
          />
        </div>
      </main>
    );
  }
}

export default Content;
