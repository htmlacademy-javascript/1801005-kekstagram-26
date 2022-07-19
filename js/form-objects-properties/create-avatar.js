import { getRandomPositiveInteger } from '../math/random-number.js';

function createAvatar() {
  return `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
}

export {createAvatar};

