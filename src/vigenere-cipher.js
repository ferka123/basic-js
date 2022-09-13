const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encDec(op, msg, key) {
    if (!msg || !key) throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    let keyShift = 0;
    const encDecArray = [...msg.toUpperCase()].map((c) => {
      const letterPos = c.charCodeAt(0);
      if (letterPos >= 65 && letterPos < 91) {
        const shift = op * (key.charCodeAt(keyShift++ % key.length) - 130);
        const newLetterPos = (letterPos - shift) % 26;
        return String.fromCharCode(newLetterPos + 65);
      }
      return c;
    });
    if (this.mode) return encDecArray.join("");
    else return encDecArray.reverse().join("");
  }
  encrypt(msg, key) {
    return this.encDec(-1, msg, key);
  }
  decrypt(msg, key) {
    return this.encDec(1, msg, key);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
