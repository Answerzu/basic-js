const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let numTransfers = 2 ** disksNumber - 1;
    let timeTransfers = Math.floor(numTransfers * 3600 / turnsSpeed);
    let result = { turns: numTransfers, seconds: timeTransfers };
    return result;

};