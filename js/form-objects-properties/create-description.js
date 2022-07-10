import { getRandomItemFromArray } from './functionsForArray/getRandomItemFromArray.js.js';
import { variantsOfDescriptions } from './variables/formVariables.js.js';

const createDescription = () => getRandomItemFromArray(variantsOfDescriptions);

export {createDescription};
