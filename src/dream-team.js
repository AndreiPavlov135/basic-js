const { NotImplementedError } = require("../extensions/index.js");

function createDreamTeam(members) {
  const arr = [];
  let result = "";

  if (Array.isArray(members)) {
    for (let i of members) {
      if (typeof i === "string") {
        i === " "
          ? arr.push(" ")
          : arr.push(i.trim().substring(0, 1).toUpperCase());
      }
    }
    arr.sort();
    for (let j of arr) {
      result += j;
    }
    return result;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
