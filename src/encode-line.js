const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str==="") return str;
  return str.match(/(.)\1*/g).map(s=>s.length===1 ? s : s.length+s[0]).join("");
}

module.exports = {
  encodeLine
};