// @flow
import React from 'react';
import FilmItem from '../FilmItem';
import type { Film } from '../../flow-types.js';

type Props = {
 onFilmSelect: (id: number) => void,
 films: Array<Film>
}

const ContentInfo = (props: Props) => (
  <div className='content-info'>
    <ul className='film-list'>
      {props.films.length ? (
        props.films.map(film => (
          <FilmItem
            film={film}
            id={film.id}
            key={film.id}
            onFilmSelect={props.onFilmSelect}
          />)))
      : (<h2 className='no-data'>No films found</h2>)
      }
    </ul>
  </div>
);

export default ContentInfo;
