import { getRandomPositiveInteger } from './mathFunctions/randomNumber.js';

function createAvatar() {
  return `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
}

export {createAvatar};

