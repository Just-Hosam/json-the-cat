const request = require('request');

const breed = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (err, response, body) => {
  if (err) {
    console.log('An error occured.');
    process.exit();
  }
  const info = JSON.parse(body);
  if (info.length > 0) {
    console.log(info[0].description);
  } else {
    console.log(`The breed ${breed} was not found.`);
  }
});