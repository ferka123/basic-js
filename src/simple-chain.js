const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position - 1 in this.chain) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chain = `( ${this.chain.join(" )~~( ")} )`;
    this.chain = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
