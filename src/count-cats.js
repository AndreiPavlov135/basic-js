const { NotImplementedError } = require("../extensions/index.js");

function countCats(matrix) {
  let countCat = 0;
  for (let i of matrix) {
    for (let j of i) {
      if (j === "^^") countCat++;
    }
  }
  return countCat;
}

module.exports = {
  countCats,
};
