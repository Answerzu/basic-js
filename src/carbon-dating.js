const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (!sampleActivity || sampleActivity <= 0 || !isNaN(sampleActivity)) {
        return false;
    } else {
        const k = 0.693 / HALF_LIFE_PERIOD;
        const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
        if (t <= 0 || !isFinite(t)) {
            return false;
        } else {
            return Math.ceil(t);
        }
    }
};