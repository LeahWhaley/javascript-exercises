const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((prev, current) => prev + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, current) => prev * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let product = 1;
  for (a; a > 0; a--) {
    product *= a;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
