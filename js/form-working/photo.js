const isEscapeKey = (evt) => evt.code === 'Escape';

const createCloseForm = (handlers, uploadingOverlay, bodyE) => () => {
  uploadingOverlay.classList.add('hidden');
  bodyE.classList.remove('modal-open');
  const {
    remove
  } = handlers;
  if (typeof remove === 'function') {
    remove();
  }
};

const createEscapeHandler = (handler) => (evt) => {
  if (isEscapeKey(evt)) {
    handler();
  }
};

const createEventHandlers = (uploading, closing, uploadingOverlay, bodyE) => {
  const handlers = {};
  const handleClose = createCloseForm(handlers, uploadingOverlay, bodyE);
  const handleEscape = createEscapeHandler(handleClose);
  const handleOpen = () => {
    uploadingOverlay.classList.remove('hidden');
    bodyE.classList.add('modal-open');
    closing.addEventListener('click', handleClose);
    bodyE.addEventListener('keydown', handleEscape);
  };
  handlers.remove = () => {
    closing.removeEventListener('click', handleClose);
    bodyE.removeEventListener('keydown', handleEscape);
    uploading.value = '';
  };
  return handleOpen;
};

const prepareButtonOpenForm = (closing, uploading, uploadingOverlay, bodyE) => {
  uploading.addEventListener(
    'change',
    createEventHandlers(
      uploading,
      closing,
      uploadingOverlay,
      bodyE,
    ));
};

export {
  prepareButtonOpenForm,
};
