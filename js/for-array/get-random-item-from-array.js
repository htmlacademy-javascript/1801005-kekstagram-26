import { getRandomPositiveInteger } from './mathFunctions/randomNumber.js.js.js';

const getRandomItemFromArray = (items) => items[getRandomPositiveInteger(0, items.length-1)];

export {getRandomItemFromArray};
