const assert = require('assert');

test('should add two numbers', () => {
  const result = add(2, 3);
  assert.strictEqual(result, 5);
});

test('should subtract two numbers', () => {
  const result = subtract(5, 3);
  assert.strictEqual(result, 2);
});

test('should multiply two numbers', () => {
  const result = multiply(2, 3);
  assert.strictEqual(result, 6);
});

test('should divide two numbers', () => {
  const result = divide(6, 3);
  assert.strictEqual(result, 2);
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}