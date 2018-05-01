const formatQueryParams = params => (
  `?${Object.keys(params).map(key => (
    `${key}=${encodeURIComponent(params[key])}`
  )).join('&')}`
);

export const views = {
  COMMON: 'COMMON',
  POSTER: 'POSTER',
};

export const routes = {
  base: 'http://react-cdp-api.herokuapp.com',
};

export const get = (url, query) => (

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
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = () => {
      reject(Error('Network Error'));
    };

    req.send();
  }));
