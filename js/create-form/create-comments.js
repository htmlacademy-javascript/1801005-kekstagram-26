import {createComment} from './create-comment.js';

function createComments (cycles) {
  return Array.from({length: cycles}, createComment);
}

export {createComments};
