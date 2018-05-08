// @flow
import React from 'react';
import type { Film } from '../../flow-types.js';

type Props = {
  film: Film,
  id: number,
  onFilmSelect: (id: number) => void,
}

const FilmItem = (props:Props) => {
  const { film, onFilmSelect, id } = props;

  return (
    <li className='film-list__item' onClick={() => {onFilmSelect(id)}}>
      <div className='film-item'>
        <div className='film-item__img-wrap'>
          <img alt='film' className='film-item__img' src={film.poster_path} />
        </div>
        <div className='film-item__info'>
          <div className='film-item__title'>{film.title}</div>
          <div className='film-item__year'>{film.release_date.substr(0,4)}</div>
        </div>
        <div className='film-item__genre'>{film.genres[0]}</div>
      </div>
    </li>
  );
};

export default FilmItem;
