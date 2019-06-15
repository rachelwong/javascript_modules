const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, 2000)
})

function onlyEvenNumbers(array) {
  return array.filter((value) => {
    return (value % 2) === 0
  });
}

function sumOfArray(array) {
  return array.reduce((a, b) => {
    return a + b;
  }, 0)
}

function logPlease(value) {
  console.log(value);
  return value
}

function errorHandler(err) {
  console.log("ERROR")
  console.log(err)
}

promise
  .then(logPlease)
  .then(onlyEvenNumbers)
  .then(logPlease)
  .then(sumOfArray)
  .then(logPlease)
  .catch(errorHandler);