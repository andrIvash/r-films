// @flow
import React from 'react';
import type { PosterData } from '../../flow-types.js';

type Props = {
 data: PosterData
}

const Poster = (props: Props) => (
  <div className='poster'>
    <div className='poster__img-wrap'>
      <img alt='file poster' className='poster__img' src={props.data.poster_path} />
    </div>
    <div className='poster__info film'>
      <div className='film__header'>
        <h1 className='film__title'>{props.data.title}</h1>
        <div className='film__score'>{props.data.vote_average}</div>
      </div>
      <h5 className='film__subtitle'>{props.data.tagline}</h5>
      <div className='film__info'>
        <div className='film__year'>{props.data.release_date.substr(0, 4)}</div>
        <div className='film__latency'>{props.data.runtime ? `${props.data.runtime} min` : ''}</div>
      </div>
      <p className='film__desq'>{props.data.overview}
      </p>
    </div>
  </div>
);

export default Poster;
