import {createPictureBlocks} from './render.js';
import {similarFormObjects} from './create-form/create-whole-form.js';

createPictureBlocks(
  document.querySelector('#picture'),
  similarFormObjects,
  document.querySelector('.pictures')
);
