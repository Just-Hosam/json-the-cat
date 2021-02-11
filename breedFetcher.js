const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      const info = JSON.parse(body);
      if (info.length > 0) {
        callback(err, info[0].description);
      } else {
        callback(err, `The breed ${breed} was not found.`);
      }
    }
  });
};

module.exports = fetchBreedDescription;