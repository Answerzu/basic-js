const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],

    getLength() {
        this.chain.length();
        return this;

    },
    addLink(value) {
        this.chain.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
        if (!position || !Number.isInteger(position) || this.chain.length < position || position < 0) {
            this.chain = [];
            throw new Error();
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let myChain = this.chain.join('~~');
        this.chain = [];
        return myChain;
    }

};

module.exports = chainMaker;