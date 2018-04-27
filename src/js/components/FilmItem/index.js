// @flow
import React from 'react';

type Props = {
  onSelect: (ev: SynteticInputIvent) => void,
  film: {
    title: string
  }
}

const FilmItem = (props: Props) => (
  <div className='film-item' onClick={props.onSelect}>
    <div className='film-item__img-wrap'>
      <img alt='film' className='film-item__img' src='' />
    </div>
    <div className='film-item__info'>
      <div className='film-item__title'>title</div>
      <div className='film-item__year'>2017</div>
    </div>
    <div className='film-item__genre'>Drama</div>
  </div>
);

export default FilmItem;
