import {
  checkLength
} from './math/check-length.js';

const form = document.querySelector('.img-upload__form');
const buttonUpload = form.querySelector('.img-upload__submit');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'form__validation',
  errorTextParent: 'for__validation',
  errorTextClass: 'form__error'
});

const getArrayOfValues = (value) => value.toUpperCase().split(' ').filter(String);

const reHash = /^#[A-Za-zа-яА-я0-9]{1,19}$/;

const validateHashtagsRegExp = (value) => {
  if (value.length === 0) {
    return true;
  }
  return getArrayOfValues(value).every((element) => reHash.test(element));
};

const checkCommentLength = (value) => {
  if (value.length > 140) {
    return false;
  }
  return true;
};

const prepareDoesArrayContainDuplicates = (list) => new Set(list).size < list.length;

const DoesArrayContainDuplicates = (value) => !prepareDoesArrayContainDuplicates(getArrayOfValues(value));

const checkLengthArrayOfValues = (value) => {
  if (checkLength(getArrayOfValues(value)) > 5) {
    return false;
  }
  return true;
};

pristine.addValidator(
  commentInput,
  checkCommentLength,
  'Превышено максимально количество символов (140)'
);

pristine.addValidator(
  hashtagInput,
  checkLengthArrayOfValues,
  'Число хэш-тегов не должно превышать 5'
);

pristine.addValidator(
  hashtagInput,
  DoesArrayContainDuplicates,
  'Хэш-теги не должны повторяться'
);
pristine.addValidator(
  hashtagInput,
  validateHashtagsRegExp,
  'Хэш-тег содержит до 20 символов(буквы английского языка русского языка и цифры, ), включая решётку, разделяется пробелом'
);

hashtagInput.addEventListener('change', () => {
  if (pristine.validate() === false ) {
    buttonUpload.disabled = true;
  }
  else {
    buttonUpload.disabled = false;
  }
});
