const butonPrepare  = (uploading,uploadingOverlay,bodyE) => {
  uploading.addEventListener('change', () => {
    uploadingOverlay.classList.remove('hidden');
    bodyE.classList.add('modal-open');
  });
};
const butonClose = (closing,uploadingOverlay,bodyE) => {
  closing.addEventListener('click', () => {
    uploadingOverlay.classList.add('hidden');
    bodyE.classList.remove('modal-open');
  });
};

export {butonPrepare,butonClose};
