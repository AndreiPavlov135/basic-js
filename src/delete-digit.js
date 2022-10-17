const { NotImplementedError } = require("../extensions/index.js");

function deleteDigit(n) {
  let result = 0;
  let num = [];
  while (n) {
    num.push(n % 10);
    n = Math.floor(n / 10);
  }
  for (let idx = 0; idx < num.length; idx++) {
    let n = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      if (i !== idx) {
        n = n * 10 + num[i];
      }
    }
    result = Math.max(n, result);
  }
  return result;
}

module.exports = {
  deleteDigit,
};
