import {createComment} from './createFormFunctions/createComment.js';

function createComments (cycles) {
  return Array.from({length: cycles}, createComment);
}

export {createComments};
