import {getRandomPositiveInteger} from './mathFunctions/randomNumber.js.js';

function createUrl() {
  return `photos/${getRandomPositiveInteger(1,25)}.jpg`;
}

export {createUrl};
