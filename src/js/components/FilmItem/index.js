// @flow
import React, { Component } from 'react';

type Props = {
  film: {
    id: number,
    title: string,
    tagline: string,
    vote_average: number,
    vote_count: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget: number,
    revenue: number,
    runtime: number,
    genres: Array<string>,
  },
  id: number,
  onFilmSelect: (id: number) => void,
}

class FilmItem extends Component<Props, {}> {

  onSelectHandler = () => {
    this.props.onFilmSelect(this.props.id);
  };

  render() {
    const { film } = this.props;

    return (
      <div className='film-item' onClick={this.onSelectHandler}>
        <div className='film-item__img-wrap'>
          <img alt='film' className='film-item__img' src={film.poster_path} />
        </div>
        <div className='film-item__info'>
          <div className='film-item__title'>{film.title}</div>
          <div className='film-item__year'>{film.release_date.substr(0,4)}</div>
        </div>
        <div className='film-item__genre'>{film.genres[0]}</div>
      </div>
    );
  }
}

export default FilmItem;
