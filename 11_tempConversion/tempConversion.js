const convertToCelsius = function(fahrenheit) {
  const convertedCelsius = (fahrenheit - 32) * 5/9;
  const roundedToOneDecimal = Math.round(convertedCelsius * 10) / 10;
  return roundedToOneDecimal;
};

const convertToFahrenheit = function(celsius) {
  const convertedFahrenheit = celsius * (9 / 5) + 32;
  const roundedToOneDecimal = Math.round(convertedFahrenheit * 10) / 10;
  return roundedToOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
