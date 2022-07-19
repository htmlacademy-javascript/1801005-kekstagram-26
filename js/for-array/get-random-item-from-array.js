import { getRandomPositiveInteger } from '../math/random-number.js';

const getRandomItemFromArray = (items) => items[getRandomPositiveInteger(0, items.length-1)];

export {getRandomItemFromArray};
