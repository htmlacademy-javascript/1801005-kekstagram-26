import {createPictureBlocks} from './render.js';
import {similarFormObjects} from './create-form/create-whole-form.js';
import {butonClose, butonEscClose, butonPrepare, removeEsc, uploadData} from './form-working/photo.js';

createPictureBlocks(
  document.querySelector('#picture'),
  similarFormObjects,
  document.querySelector('.pictures')
);

butonPrepare(
  document.querySelector('#upload-cancel'),
  document.querySelector('#upload-file'),
  document.querySelector('.img-upload__overlay'),
  document.querySelector('body')
);

// butonClose(
//   document.querySelector('#upload-cancel'),
//   document.querySelector('.img-upload__overlay'),
//   document.querySelector('body')
// );

// butonEscClose(
//   document,
//   document.querySelector('.img-upload__overlay'),
//   document.querySelector('body')
// );

// removeEsc(
//   document,
//   document.querySelector('.img-upload__overlay'),
//   document.querySelector('body')
// );

// uploadData(
//   document.querySelector('.img-upload__submit'),
//   document.querySelector('.text__description').value,
//   document.querySelector('.text__hashtags').value
// );


/*const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleInt = parseFloat(scaleControlValue.value);

const doBigger = (button, scale, value) => {
  button.addEventListener('click', () => {
    value.value = `${scale + 25}%`;
  });
};
*/

