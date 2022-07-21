import {createPictureBlocks} from './render.js';
import {similarFormObjects} from './create-form/create-whole-form.js';
import {butonClose, butonPrepare} from './form-working/photo.js';

createPictureBlocks(
  document.querySelector('#picture'),
  similarFormObjects,
  document.querySelector('.pictures')
);

butonPrepare(
  document.querySelector('#upload-file'),
  document.querySelector('.img-upload__overlay'),
  document.querySelector('body')
);

butonClose(
  document.querySelector('#upload-cancel'),
  document.querySelector('.img-upload__overlay'),
  document.querySelector('body')
);
