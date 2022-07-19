import {createUrl} from '../form-objects-properties/create-url.js';
import {createDescription} from '../form-objects-properties/create-description.js';
import {getRandomPositiveInteger} from '../math/random-number.js';
import {createComments} from '../create-form/create-comments.js';

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
