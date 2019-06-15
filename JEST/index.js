function add(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw "Numbers only"
  } else {
    return a + b
  }
}

function subtract(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    throw "Numbers only"
  } else {
    return a - b
  }
}

module.exports = {
  add,
  subtract
}