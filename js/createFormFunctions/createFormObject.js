import {createUrl} from './formObjectsPropertiesFunctions/createUrl.js';
import {createDescription} from './formObjectsPropertiesFunctions/createDescription.js';
import {getRandomPositiveInteger} from './mathFunctions/randomNumber.js';
import {createComments} from './createFormFunctions/createComments.js';

function createFormObject(_, id) {
  return ({
    id,
    url: createUrl(),
    description: createDescription(),
    likes: getRandomPositiveInteger(15,200),
    comments: createComments(getRandomPositiveInteger(0,10))
  });
}

export {createFormObject};
