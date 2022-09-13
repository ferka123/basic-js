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
  encDec(op,msg,key) {
    if (!msg || !key) throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    let totalEncDec = 0;
    const encDecArray = [...msg.toUpperCase()].map(c => {
      if (/[A-Z]/.test(c)) { 
        let encDecChar =
          (c.charCodeAt(0) - op*key.charCodeAt(totalEncDec % key.length)+op*130) % 26;
        totalEncDec++;
        return String.fromCharCode(encDecChar+65);
      }
      return c;
    });
    if (this.mode) return encDecArray.join("")
    else return encDecArray.reverse().join("");
  }
  encrypt(msg,key) {
    return this.encDec(-1,msg,key)
  }
  decrypt(msg, key) {
    return this.encDec(1,msg,key)
  }
}

module.exports = {
  VigenereCipheringMachine,
};