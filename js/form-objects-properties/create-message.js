import { getRandomItemFromArray } from './functionsForArray/getRandomItemFromArray.js.js';
import { variantsOfMessages } from './variables/formVariables.js.js';

const createMessage = () => getRandomItemFromArray(variantsOfMessages);

export {createMessage};
