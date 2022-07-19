import { getRandomItemFromArray } from '../for-array/get-random-item-from-array.js';
import { variantsOfDescriptions } from '../variables/form-variables.js';

const createDescription = () => getRandomItemFromArray(variantsOfDescriptions);

export {createDescription};
