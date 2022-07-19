import { getRandomItemFromArray } from '../for-array/get-random-item-from-array.js';
import { variantsOfMessages } from '../variables/form-variables.js';

const createMessage = () => getRandomItemFromArray(variantsOfMessages);

export {createMessage};
