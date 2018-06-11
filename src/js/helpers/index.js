import axios from 'axios';

export const formatQueryParams = params => (
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

  // getData: (url, query) => (
  //   new Promise( (resolve, reject) => {
  //     const req = new XMLHttpRequest();
  //     let combinedUrl = url;
  //     if (query) {
  //       combinedUrl = `${url}${formatQueryParams(query)}`;
  //       console.log(combinedUrl);
  //     }
  //     req.open('GET', combinedUrl);
  //     req.onload = () => {
  //       if (req.status === 200) {
  //         setTimeout(() => {
  //           resolve(JSON.parse(req.response));
  //         }, 2000);
  //       } else {
  //         reject(Error(req.statusText));
  //       }
  //     };
  //     req.onerror = () => {
  //       reject(Error('Network Error'));
  //     };
  //     req.send();
  //   })),

  fetchAllData: (url, query) => {
    let combinedUrl = url ? url : `${helpers.routes.base}/movies`;
    if (query && query.search) {
      const search = query.search;
      const searchBy = query.searchBy ? query.searchBy : 'title';
      combinedUrl = `${combinedUrl}?search=${search}&searchBy=${searchBy}`;
    }
    console.log('fetch', combinedUrl);
    return axios.get(encodeURI(combinedUrl))
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
  fetchSingle: url => {
    const id = url.split('/').pop();
    console.log(url.split('/'));
    return axios.get(encodeURI(`${helpers.routes.base}/movies/${id}`))
      .then(res => {
       return res.data;
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  },
};

export default helpers;
