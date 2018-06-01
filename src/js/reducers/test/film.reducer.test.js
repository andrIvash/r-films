import { selectFilm } from '../film';
import * as actions from '../../actions/index';

let defaultState = {};

describe('selectFilm reducer', () => {
  beforeEach(() => {
      defaultState.posterData = {
      title: '',
      poster_path: '',
      vote_average: 0,
      tagline: '',
      release_date: '',
      overview: '',
      };
    defaultState.selectedGenre = 'Drama';
  });
  it('should return the initial state', () => {
    expect(selectFilm(undefined, {}))
      .toEqual(defaultState);
  });
  it('should handle SELECT_FILM', () => {
    expect(selectFilm({}, {
      type: actions.SELECT_FILM,
      genre: 'Drama',
      film: { title: 'film' }})).toMatchSnapshot();
  });
});
