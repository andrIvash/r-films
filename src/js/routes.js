import App from './components/App';
import NotFound from './components/NotFound';
import helpers from './helpers';
import { getFilms, selectFilm } from './actions';
// import { fetchPopularRepos } from './api'

const routes = [
  {
    name: 'main',
    path: '/',
    exact: true,
    component: App,
    fetchInitialData: () => getFilms(),
  },
  {
    name: 'film',
    path: '/film/:id',
    exact: true,
    component: App,
    fetchInitialData: url => selectFilm(null, url),
  },
  {
    name: 'search',
    path: '/search',
    exact: true,
    component: App,
    fetchInitialData: (url, query) => getFilms(null, query),
  },
  {
    name: 'notfound',
    path: '*',
    component: NotFound,
  },
];

export default routes;
