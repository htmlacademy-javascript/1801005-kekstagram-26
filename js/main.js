//функции отвечающие за первую задачу
//Знаю, что можно расписать в одну строку, но мне показался такой вариант неудобным
const checkOrder = (min, max) => {
  if (min > max) {
    throw new Error('Перепутаны максимум и минимум')
  }
};

const checkNonNegative = (min, max) => {
  if ((min <= 0)||(max < 0)) {
    throw new Error('Значение должно быть больше нуля')
  }
};

const checkInteger = (min, max) => {
  if ((!Number.isInteger(min)) || (!Number.isInteger(min))) {
    throw new Error ('Значение должно быть целочисленным')
}
};

const validateRange = (min, max) => {
  if ((checkOrder(min, max) && checkNonNegative(min, max) && checkInteger(min, max)) === false) {
    throw new Error ('Исправьте ошибку')
  }
};

const createRange = (min, max) => { max - min + 1 };

const getRandomInt = (min,max) => { Math.floor(Math.random() * createRange(min,max)) + min };

//вторая задача
const checkLength = (string,maxLength) => { string.length < maxLength };


