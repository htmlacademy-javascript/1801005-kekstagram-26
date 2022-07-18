import { similarFormObjects } from './create-form/create-whole-form.js';

const picture = document.querySelector('#picture');
const formObjects = similarFormObjects();
const pictureFragmnet = document.createDocumentFragment();

formObjects.array.forEach(({url, likes, comments}) => {
  const pictureTemplate = picture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('..picture__comments').textContent = comments;
  pictureFragmnet.appendChild(pictureTemplate);
});


