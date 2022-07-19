import {getRandomPositiveInteger} from '../math/random-number.js';

function createUrl() {
  return `photos/${getRandomPositiveInteger(1,25)}.jpg`;
}

export {createUrl};
