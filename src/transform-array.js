const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!")
  const res = [];
  arr.map((element, index) => {
    if (arr[index - 1] === "--discard-next") {
      res.push([]);
    } else if (element === "--discard-prev") {
      res.pop();
    } else if (arr[index - 1] === "--double-next") {
      res.push(element, element);
    } else if (element === "--double-prev") {
      res.push(res.at(-1) ?? []);
    } else if (element !== "--double-next" && element !== "--discard-next")
      res.push(element);
  });
  return res.flat()
}

module.exports = {
  transform,
};
