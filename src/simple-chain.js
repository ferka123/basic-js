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
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.getLength()
    ) {
      this.chain = []
      throw Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
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

console.log(
  chainMaker
    .addLink("GHI")
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink("GHI")
    .finishChain()
);
