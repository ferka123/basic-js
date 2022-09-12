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
  encrypt(msg, key) {
    if (!msg || !key) throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    let totalEnc = 0;
    const encArray = [...msg.toUpperCase()].map(c => {
      if (/[A-Z]/.test(c)) { 
        let encChar =
          c.charCodeAt(0) + key.charCodeAt(totalEnc % key.length) - 65;
        if (encChar > 90) encChar -= 26;
        totalEnc++;
        return String.fromCharCode(encChar);
      }
      return c;
    });
    if (this.mode) return encArray.join("")
    else return encArray.reverse().join("");
  }
  decrypt(msg, key) {
    if (!msg || !key) throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    let totalDec = 0;
    const decArray = [...msg.toUpperCase()].map(c => {
      if (/[A-Z]/.test(c)) { 
        let decChar =
          c.charCodeAt(0) - key.charCodeAt(totalDec % key.length) + 65;
        if (decChar < 65) decChar += 26;
        totalDec++;
        return String.fromCharCode(decChar);
      }
      return c;
    });
    if (this.mode) return decArray.join("")
    else return decArray.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};