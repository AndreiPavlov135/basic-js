const { NotImplementedError } = require("../extensions/index.js");

function getCommonCharacterCount(s1, s2) {
  let charCount = 0;
  const obj = s2.split("");
  for (let i of s1) {
    let index = obj.findIndex((s) => s === i);
    if (index >= 0) {
      charCount++;
      obj.splice(index, 1);
    }
  }
  return charCount;
}

module.exports = {
  getCommonCharacterCount,
};
