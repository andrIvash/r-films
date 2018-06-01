import fetch from 'isomorphic-fetch';

const formatQueryParams = params => (
  `?${Object.keys(params).map(key => (
    `${key}=${encodeURIComponent(params[key])}`
  )).join('&')}`
);

export default {
  views: {
    COMMON: 'COMMON',
    POSTER: 'POSTER',
  },

  routes: {
    base: 'http://react-cdp-api.herokuapp.com',
  },

  getData: (url, query) => (
    new Promise( (resolve, reject) => {
      const req = new XMLHttpRequest();
      let combinedUrl = url;
      if (query) {
        combinedUrl = `${url}${formatQueryParams(query)}`;
        console.log(combinedUrl);
      }
      req.open('GET', combinedUrl);
      req.onload = () => {
        if (req.status === 200) {
          setTimeout(() => {
            resolve(JSON.parse(req.response));
          }, 2000);
        } else {
          reject(Error(req.statusText));
        }
      };
      req.onerror = () => {
        reject(Error('Network Error'));
      };
      req.send();
    })),
  fetchPopularRepos: (url) => {
    const encodedURI = encodeURI(url);
    return fetch(encodedURI)
      .then((data) => data.json())
      //.then((repos) => repos.items)
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
};

