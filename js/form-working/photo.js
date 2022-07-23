import { checkLength } from '../math/check-length.js';

const butonPrepare  = (uploading,uploadingOverlay,bodyE) => {
  uploading.addEventListener('change', () => {
    uploadingOverlay.classList.remove('hidden');
    bodyE.classList.add('modal-open');
  });
};
const butonClose = (closing,uploadingOverlay,bodyE) => {
  closing.addEventListener('click', (evt) => {
    evt.preventDefault();
    uploadingOverlay.classList.add('hidden');
    bodyE.classList.remove('modal-open');
  });
};

const reHashtag = /^#[A-Za-zА-яа-яЁё0-9]{1-19}$/;
const createArrayOfHash = (hash) => hash.split('#');

const check = (hash,com) => {if (!reHashtag.test(hash)) {
  new Error ('Ввод был осуществлен некорректно');
  new Error ('Cтрока после решётки должна состоять из букв и чисел');
  new Error ('не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
}
if (checkLength(com) > 140) {
  new Error ('длина комментария не может составлять больше 140 символов');

}
if ((createArrayOfHash(hash)).length > 5) {
  new Error ('Нельзя указать больше пяти хэш-тегов');
}
};

const uploadData = (button, inputCom, inputHash) => {
  button.addEventListener('submit', check(inputCom, inputHash));
};


const isEscapeKey = (evt) => evt.keyCode === 27;

const butonEscClose = (doc,uploadingOverlay,bodyE) => {
  doc.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEscapeKey) {
      uploadingOverlay.classList.add('hidden');
      bodyE.classList.remove('modal-open');
    }
  });
};

const removeEsc = (doc,uploadingOverlay,bodyE) => {
  doc.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (isEscapeKey) {
      uploadingOverlay.classList.add('hidden');
      bodyE.classList.remove('modal-open');
    }
  });
};

export {butonPrepare, butonClose, butonEscClose, uploadData, removeEsc};

