// @flow
import React from 'react';
import FilmItem from '../FilmItem';

type Props = {
 onSelect: (ev: SynteticInputIvent) => void,
 films: [{name: string}]
}

function filmItems(props: Props) {
  const { films, onSelect } = props;

  if (props.films && props.films.length) {
    return films.map(item => (
      <li className='film-list__item' key={item}>
        <FilmItem film={item} onSelect={onSelect} />
      </li>
    ));
  }
  return <h2 className='no-data'>No films found</h2>;
}

const ContentInfo = (props: Props) => (
  <div className='content-info'>
    <ul className='film-list'>
      {filmItems(props)}
    </ul>
  </div>
);

export default ContentInfo;
