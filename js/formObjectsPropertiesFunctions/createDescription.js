import { getRandomItemFromArray } from './functionsForArray/getRandomItemFromArray.js';
import { variantsOfDescriptions } from './variables/formVariables.js';

const createDescription = () => getRandomItemFromArray(variantsOfDescriptions);

export {createDescription};
