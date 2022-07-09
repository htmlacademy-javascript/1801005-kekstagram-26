import { getRandomItemFromArray } from './functionsForArray/getRandomItemFromArray.js';
import { variantsOfMessages } from './variables/formVariables.js';

const createMessage = () => getRandomItemFromArray(variantsOfMessages);

export {createMessage};
