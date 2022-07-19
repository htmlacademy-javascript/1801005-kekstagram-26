/**
 *
 * @param {HTMLElement} picture
 * @param {*} item
 */
const createSinglePicture = (picture, item) =>{
  picture.querySelector('.picture__img').src = item.url;
  picture.querySelector('.picture__likes').textContent = item.likes;
  picture.querySelector('.picture__comments').textContent = item.comments.length;
  return picture;
};

/**
 *
 * @param {HTMLTemplateElement} template
 * @returns
 */
const createSinglePictureFactory = (template) => (item) => createSinglePicture(template.content.cloneNode(true), item);
/**
 *
 * @param {*} picture
 * @param {Array} formObjects
 * @param {HTMLElement} pictureBlocks
 */
const createPictureBlocks = (picture,formObjects,pictureBlocks) => {
  pictureBlocks.append(...formObjects.map(createSinglePictureFactory(picture)));
};

export {createPictureBlocks};
