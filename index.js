const fetchBreedDescription = require('./breedFetcher');

const breed = process.argv[2];

const test = (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
};

fetchBreedDescription(breed, test);