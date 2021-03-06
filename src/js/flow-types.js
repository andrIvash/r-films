// @flow

export type Film = {
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
  runtime?: number,
  genres: Array<string>,
}

export type PosterData = {
  title: string,
  poster_path: string,
  vote_average: number,
  tagline: string,
  release_date: string,
  overview: string,
  runtime?: number
}

export type View = 'COMMON' | 'POSTER';
