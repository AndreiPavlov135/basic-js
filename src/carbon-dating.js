const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  return typeof sampleActivity === "string" &&
    sampleActivity > 0 &&
    sampleActivity <= MODERN_ACTIVITY
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
      )
    : false;
}

module.exports = {
  dateSample,
};
