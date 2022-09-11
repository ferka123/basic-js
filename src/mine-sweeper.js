const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const moves = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
  ]
  const res = [];
  for (let j=0;j<matrix.length;j++) {
    const subArray = []
    for (let i=0;i<matrix[j].length;i++) {
      const mineCount = moves.reduce((sum,move) => {
        return sum+((matrix[j+move[0]] ?? [])[i+move[1]] ?? 0)
      },0);
      subArray.push(mineCount);
    }
    res.push(subArray)
  }
  return res;
}

module.exports = {
  minesweeper
};

