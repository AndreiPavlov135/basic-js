const { NotImplementedError } = require("../extensions/index.js");

function getSumOfDigits(n) {
  return n % 9 || 9;
}

module.exports = {
  getSumOfDigits,
};
