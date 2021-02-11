const assert = require('chai').assert;
const fetchBreedDescription = require('../breedFetcher');

describe('Tests for breedFetcher.js', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns that the breed is not available for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Husky', (err, desc) => {
      const expectedDesc = `The breed Husky was not found.`;

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});