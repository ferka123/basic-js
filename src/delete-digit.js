const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString();
  let max = 0;
  for (i=0;i<n.length;i++) {
    tempN = [...n];
    tempN.splice(i,1);
    tempN = Number(tempN.join(""))
    if (max<tempN) max = tempN;
  }
  return max;
}

module.exports = {
  deleteDigit
};