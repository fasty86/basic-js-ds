const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement the Stack with a given interface via array.
 *
 *  */
//  * @example

class Stack {
  constructor() {
    this._data = []
  }
  push(element) {
    this._data.unshift(element)
  }

  pop() {
    return this._data.shift()
  }

  peek() {
    return this._data[0]
  }
}
const stack = new Stack()

stack.push(1) // adds the element to the stack
console.log(stack.peek()) // returns the peek, but doesn't delete it, returns 1
console.log(stack.pop()) // returns the top element from stack and deletes it, returns 1
console.log(stack.pop()) // undefined

module.exports = {
  Stack,
}
