const { TestScheduler } = require('@jest/core')
var assert = require('assert')
const {sums, multiplys} = require("./functions_to_test")

test('should output the sum', () => {
  const sm = sums(1,2);
  expect(sm).toBe(3);
})