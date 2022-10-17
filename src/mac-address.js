const { NotImplementedError } = require("../extensions/index.js");

function isMAC48Address(n) {
  const testMac = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  return testMac.test(n);
}
module.exports = {
  isMAC48Address,
};
