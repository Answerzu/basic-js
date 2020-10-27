const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        members = members.filter(e => (typeof e === 'string') && !!e)
        members = members.map(function(el) {
            return el.trim();
        });
        members = members.map(function(item) { return item[0] }).join('').toUpperCase();
        let myArr = members.split('').sort();
        members = myArr.join('');
        return members;
    } else {
        return false;
    }
};