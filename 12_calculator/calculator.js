const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	const total =  array.reduce((sum, array) => sum + array, 0);
  return total
};

const multiply = function(array) {
  const total = array.reduce((currentTotalValue, currentValue) => currentTotalValue * currentValue);
  return total;
};

const power = function(num1, num2) {
  return total = Math.pow(num1, num2);
};

const factorial = function(number) {
  let total = 1
	for (let i = 1; i <= number; i++) {
     total *= i;
  };
  return total;
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
