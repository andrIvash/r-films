import App from './components/App';
import NotFound from './components/NotFound';
import helpers from './helpers';
// import { fetchPopularRepos } from './api'

const routes = [
  {
    path: '/index',
    exact: true,
    component: App,
    // fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
    fetchInitialData: () => helpers.fetchPopularRepos(`${helpers.routes.base}/movies`),
  },
  {
    path: '/film/:id',
    exact: true,
    component: App,
  },
  {
    path: '/search',
    exact: true,
    component: App,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
