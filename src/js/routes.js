import App from './components/App';
import NotFound from './components/NotFound';
import helpers from './helpers';
// import { fetchPopularRepos } from './api'

const routes = [
  {
    name: 'main',
    path: '/',
    exact: true,
    component: App,
    fetchInitialData: (url) => helpers.fetchAllData(`${helpers.routes.base}${url}`),
  },
  {
    name: 'film',
    path: '/film/:id',
    exact: true,
    component: App,
    fetchInitialData: (url) => helpers.fetchSingle(`${helpers.routes.base}${url}`),
  },
  {
    name: 'search',
    path: '/search',
    exact: true,
    component: App,
    fetchInitialData: (url) => helpers.fetchAllData(`${helpers.routes.base}${url}`),
  },
  {
    name: 'notfound',
    path: '*',
    component: NotFound,
  },
];

export default routes;
