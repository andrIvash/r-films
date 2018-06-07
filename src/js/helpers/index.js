import axios from 'axios';

const formatQueryParams = params => (
  `?${Object.keys(params).map(key => (
    `${key}=${encodeURIComponent(params[key])}`
  )).join('&')}`
);

const helpers = {
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

  fetchAllData: (url) => {
    const encodedURI = encodeURI(url);
    return axios.get(encodedURI)
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
  fetchSingle: (url) => {
    const encodedURI = encodeURI(url);
    const result = {};
    const baseURL = helpers.routes.base;
    console.log('url', url);
    return axios.get(encodedURI)
      .then(res => {
        result.single = res.data;
      })
      .then(() => {
        return axios.get(`${baseURL}/movies?search=${result.single.genres[0]}&searchBy=genres`)
        .then(res => {
          result.items = res.data.data;
          return result;
        });
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
};

export default helpers;
