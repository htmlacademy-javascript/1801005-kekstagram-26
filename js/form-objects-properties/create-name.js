import { getRandomItemFromArray } from '../for-array/get-random-item-from-array.js';
import { variantsOfNames } from '../variables/form-variables.js';

const createName = () => getRandomItemFromArray (variantsOfNames);

export {createName};
