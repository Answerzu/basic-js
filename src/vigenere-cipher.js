const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag
        this.alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error;
        message = message.toUpperCase()
        key = key.toUpperCase()
        let resultArray = [];
        let step = 0;
        for (let i in message) {
            let messageLetterPos = this.alphabet.indexOf(message[i])
            if (messageLetterPos === -1) {
                resultArray.push(message[i]);
                continue;
            }
            let keyLetterPos = this.alphabet.indexOf(key[step % key.length])
            let num = (messageLetterPos + keyLetterPos) % 26;
            resultArray.push(this.alphabet[num])
            step++;
        }
        return this.flag ? resultArray.join('') : resultArray.reverse().join('')
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error;
        message = message.toUpperCase()
        key = key.toUpperCase()
        let resultArray = [];
        let step = 0;
        for (let i in message) {
            let messageLetterPos = this.alphabet.indexOf(message[i])
            if (messageLetterPos === -1) {
                resultArray.push(message[i]);
                continue;
            }
            let keyLetterPos = this.alphabet.indexOf(key[step % key.length])
            let x = (messageLetterPos - keyLetterPos + 26) % 26;
            resultArray.push(this.alphabet[x])
            step++;
        }
        return this.flag ? resultArray.join('') : resultArray.reverse().join('')
    }
}

module.exports = VigenereCipheringMachine;