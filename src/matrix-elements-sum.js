const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let j=0;j<matrix.length;j++) {
    for (let i=0;i<matrix[j].length;i++) {
      sum+=matrix[j][i]*(j===0 ? 1 : matrix[j-1][i]!==0)
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};