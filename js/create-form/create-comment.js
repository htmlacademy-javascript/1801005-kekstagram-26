import {createAvatar} from '../form-objects-properties/create-avatar.js';
import {createMessage} from '../form-objects-properties/create-message.js';
import {createName} from '../form-objects-properties/create-name.js';

function createComment(_, id) {
  return ({
    id,
    avatar: createAvatar(1,6),
    message: createMessage(),
    name: createName(),
  });
}

export {createComment};
