import {createAvatar} from './formObjectsPropertiesFunctions/createAvatar.js.js';
import {createMessage} from './formObjectsPropertiesFunctions/createMessage.js.js';
import {createName} from './formObjectsPropertiesFunctions/createName.js.js';

function createComment(_, id) {
  return ({
    id,
    avatar: createAvatar(1,6),
    message: createMessage(),
    name: createName(),
  });
}

export {createComment};
