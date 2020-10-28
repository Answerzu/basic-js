const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        throw new Error();
    } else if (arr == []) {
        let myArr;
        return myArr = [];
    } else {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i - 1] == '--discard-next') {
                newArr.pop();
                newArr[i] = "";
            } else if (arr[i] == '--discard-prev') {
                newArr.pop();
            } else if (arr[i] == '--double-next') {
                newArr.push(arr[i + 1]);
            } else if (arr[i] == '--double-prev') {
                newArr.push(arr[i - 1]);
            } else {
                newArr.push(arr[i]);
            }
        }
        newArr = newArr.filter(function(el) {
            return el != null && el != "" && typeof el === "number";
        });

        return newArr;
    }

};