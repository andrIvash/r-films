// @flow
import React from 'react';

type Props = {
 data: {
   title: string,
 }
}

const Poster = (props: Props) => (
  <div className='poster'>
    <div className='poster__img-wrap'>
      <img alt='file poster' className='poster__img' src='' />
    </div>
    <div className='poster__info film'>
      <div className='film__header'>
        <h1 className='film__title'> title</h1>
        <div className='film__score'> 10.1</div>
      </div>
      <h5 className='film__subtitle'>film__subtitle </h5>
      <div className='film__info'>
        <div className='film__year'>film__year</div>
        <div className='film__latency'> film__latency</div>
      </div>
      <p className='film__desq'>film__desq
      </p>
    </div>
  </div>
);

export default Poster;
