function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let number;
  if (min > max)
  {
    number = min;
    min = max;
    max = number;
  };
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function lengthControl(string,maxLength)
{
  string.length < maxLength ? console.log(true) : console.log(false);
};

