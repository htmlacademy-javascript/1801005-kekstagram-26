import {
  checkLength
} from '../math/check-length.js';

const isEscapeKey = (evt) => evt.code === 'Escape';

const createCloseForm = (handlers, uploadingOverlay, bodyE) => () => {
  uploadingOverlay.classList.add('hidden');
  bodyE.classList.remove('modal-open');
  /**
   * remove click
   * remove esc
   */
  const {remove} = handlers;
  if(typeof remove === 'function'){
    remove();
  }
};

const createEscapeHandler = (handler) => (evt) => {
  if (isEscapeKey(evt)) {
    handler();
  }
};

const createEventHandlers = (uploadingOverlay, bodyE) => {
  const handlers = {};
  const handleClose = createCloseForm(handlers, uploadingOverlay, bodyE);
  const handleEscape = createEscapeHandler(handleClose);
  const handleOpen = () => {
    uploadingOverlay.classList.remove('hidden');
    bodyE.classList.add('modal-open');
  };
  return {
    handleOpen,
    handleClose,
    handleEscape,
  };
};

const prepareButtonOpenForm = (closing, uploading, uploadingOverlay, bodyE) => {
  const {handleOpen, handleClose, handleEscape} = createEventHandlers(uploadingOverlay, bodyE);
  uploading.addEventListener('change', handleOpen);
  closing.addEventListener('click', handleClose);
  bodyE.addEventListener('keydown', handleEscape);
};
const prepareButtonCloseForm = (closing, uploadingOverlay, bodyE) => {
  closing.addEventListener('click', createCloseForm({},uploadingOverlay, bodyE));
};


const prepareEscapeToCloseForm = (doc, uploadingOverlay, bodyE) => {
  const handler = createCloseForm({},uploadingOverlay, bodyE);
  doc.addEventListener('keydown', createEscapeHandler(handler));
};

const reHashtag = /^#[A-Za-zА-яа-яЁё0-9]{1-19}$/;
const createArrayOfHash = (hash) => hash.split('#');

const check = (hash, com) => {
  if (!reHashtag.test(hash)) {
    new Error('Ввод был осуществлен некорректно');
    new Error('Cтрока после решётки должна состоять из букв и чисел');
    new Error('не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
  }
  if (checkLength(com) > 140) {
    new Error('длина комментария не может составлять больше 140 символов');

  }
  if ((createArrayOfHash(hash)).length > 5) {
    new Error('Нельзя указать больше пяти хэш-тегов');
  }
};

const uploadData = (button, inputCom, inputHash) => {
  button.addEventListener('submit', check(inputCom, inputHash));
};


const removeEsc = (doc, uploadingOverlay, bodyE) => {
  doc.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      uploadingOverlay.classList.add('hidden');
      bodyE.classList.remove('modal-open');
    }
  });
};


export {
  prepareButtonOpenForm as butonPrepare,
  prepareButtonCloseForm as butonClose,
  prepareEscapeToCloseForm as butonEscClose,
  uploadData,
  removeEsc
};
