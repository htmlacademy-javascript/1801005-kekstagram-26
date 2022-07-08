//Функции академии
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//функции отвечающие за первую задачу
//Знаю, что можно расписать в одну строку, но мне показался такой вариант неудобным
const checkOrder = (min, max) => {
  if (min > max) {
    throw new Error('Перепутаны максимум и минимум');
  }
};

const checkNonNegative = (min, max) => {
  if ((min <= 0)||(max < 0)) {
    throw new Error('Значение должно быть больше нуля');
  }
};

const checkInteger = (min, max) => {
  if ((!Number.isInteger(min)) || (!Number.isInteger(max))) {
    throw new Error ('Значение должно быть целочисленным');
  }
};

const validateRange = (min, max) => {
  if ((checkOrder(min, max) && checkNonNegative(min, max) && checkInteger(min, max)) === false) {
    throw new Error ('Исправьте ошибку');
  }
};

const createRange = (min, max) => max - min + 1;

const getRandomInt = (min,max) => {
  if (validateRange(min, max) === true) {
    return Math.floor(Math.random() * createRange(min,max)) + min;
  }
};

//вторая задача
function checkLength(string, maxLength) {
  return string.length < maxLength;
}

const getRandomItemFromArray = (items) => items[getRandomPositiveInteger(0, items.length-1)];
//создает url строку

function createUrl() {
  return `photos/${getRandomPositiveInteger(1,25)}.jpg`;
}

function createAvatar() {
  return `img/avatar-${getRandomPositiveInteger(1,6)}.svg`;
}

//массив для descripton
const variantsOfDescriptions = ['живописно','удивительно','красивый вид','любимое фото','дежавю'];

const variantsOfMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const variantsOfNames = [
  'Артём',
  'Алиса',
  'Женя',
  'Саша',
  'Коля'
];

const createName = () => getRandomItemFromArray (variantsOfNames);

const createMessage = () => getRandomItemFromArray(variantsOfMessages);

const createDescription = () => getRandomItemFromArray(variantsOfDescriptions);

function createFormObject(_, id) {
  return ({
    id,
    url: createUrl(),
    description: createDescription(),
    likes: getRandomInt(15,200),
    comments: createComments(getRandomPositiveInteger(0,10))
  });
}

const similarFormObjects = Array.from({length: 25}, createFormObject);


function createComment(_, id) {
  return ({
    id,
    avatar: createAvatar(1,6),
    message: createMessage(),
    name: createName(),
  });
}

function createComments (cycles) {
  return Array.from({length: cycles}, createComment);
}

console.log(Array.from({length: 5}, createFormObject));
