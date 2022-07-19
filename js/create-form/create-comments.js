import {createComment} from '../create-form/create-comment.js';

function createComments (cycles) {
  return Array.from({length: cycles}, createComment);
}

export {createComments};
