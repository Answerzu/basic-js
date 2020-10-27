const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let myArr = arr.reduce((acc, val) => acc.concat(val), []);
    let cats = myArr.filter(item => item == '^^');
    let catsNumber = +cats.length;

    return catsNumber;
};