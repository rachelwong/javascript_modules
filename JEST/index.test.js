const {
  add
} = require('./index')

const {
  subtract
} = require('./index')

// const assert = require('assert')
// test numeric input, testing can still uses assertions

describe("add()", () => {
  test("Test 1: add (2,5) is equal to 7.", () => {
    expect(add(1, 5)).toBe(6)
  })
  // test string parameters
  // this only works when the excption fails
  // explicitly testing does it throw an exception when I pass in a string
  test("Test 2: add ('fsddsf', 5) throws an exception.", () => {
    expect(() => {
      add('fsddsf', 5)
    }).toThrow()
  })
})

describe("subtract()", () => {
  test("Test 1: Subtract (6, 7) is equal to -1.", () => {
    expect(subtract(6, 7)).toBe(-1)
  })
  // test string parameters
  // this only works when the excption fails
  // explicitly testing does it throw an exception when I pass in a string
  test("Test 2: subtract ('fsddsf', 4) throws an exception.", () => {
    expect(() => {
      subtract('fsddsf', 4)
    }).toThrow()
  })
})