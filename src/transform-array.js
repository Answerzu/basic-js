const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const double_next = '--double-next';
    const double_prev = '--double-prev';
    const discard_next = '--discard-next';
    const discard_prev = '--discard-prev';

    if (!Array.isArray(arr)) {
        throw new Error;
    }
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === discard_next) {
            if (arr[i + 2] === double_prev || arr[i + 2] === discard_prev) {
                i++;
            }
            i++;
        } else if (arr[i] === discard_prev) {
            if (i !== 0) {
                newArray.pop();
            }
        } else if (arr[i] === double_next) {
            if (i < arr.length - 1) {
                newArray.push(arr[i + 1]);
            }
        } else if (arr[i] === double_prev) {
            if (i !== 0) {
                newArray.push(arr[i - 1]);
            }
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};