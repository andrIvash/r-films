// @flow
import React from 'react';
import FilmItem from '../FilmItem';
import { Film } from '../../flow-types.js';

type Props = {
 onFilmSelect: (id: number) => void,
 films: Array<Film>
}

function filmItems(props: Props) {
  if (props.films && props.films.length) {
    return props.films.map((item, ndx) => (
      <li
        className='film-list__item'
        key={item.id}
        >
        <FilmItem
          film={item}
          id={item.id}
          onFilmSelect={props.onFilmSelect}
        />
      </li>
    ));
  }
  return <h2 className='no-data'>No films found</h2>;
}

const ContentInfo = (props: Props) => (
  <div className='content-info'>
    <ul className='film-list'>

      {filmItems(props)}

      {props.films.length && props.films.length ? (
        props.films.map(film => <FilmItem {...film} onFilmSelect={props.onFilmSelect} />)
      ) : (
        <h2 className='no-data'>No films found</h2>
      )}
    </ul>
  </div>
);

export default ContentInfo;
