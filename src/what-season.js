const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    } else if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
    } else {
        let myMonth = date.getMonth();
        if (myMonth > 1 && myMonth < 5) {
            return 'spring';
        } else if (myMonth > 4 && myMonth < 8) {
            return 'summer';
        } else if (myMonth > 7 && myMonth < 11) {
            return 'fall';
        } else {
            return 'winter';
        }

    }

};