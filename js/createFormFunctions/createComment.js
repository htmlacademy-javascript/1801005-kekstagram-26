import {createAvatar} from './formObjectsPropertiesFunctions/createAvatar.js';
import {createMessage} from './formObjectsPropertiesFunctions/createMessage.js';
import {createName} from './formObjectsPropertiesFunctions/createName.js';

function createComment(_, id) {
  return ({
    id,
    avatar: createAvatar(1,6),
    message: createMessage(),
    name: createName(),
  });
}

export {createComment};
