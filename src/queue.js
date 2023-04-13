const { NotImplementedError } = require("../extensions/index.js")

const { ListNode } = require("../extensions/list-node.js")

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(data = null) {
    this._data = new ListNode(data)
  }

  getUnderlyingList() {
    return this._data
  }

  enqueue(value) {
    if (this._data.value == null) this._data = new ListNode(value)
    else {
      let last = this._data
      while (last.next) {
        last = last.next
      }
      last.next = new ListNode(value)
    }
  }

  dequeue() {
    let first = this._data.value
    this._data = this._data.next
    return first
  }
}
const queue = new Queue()

queue.enqueue(1) // adds the element to the queue
console.log(queue.getUnderlyingList())
queue.enqueue(3) // adds the element to the queue
queue.enqueue(4) // adds the element to the queue
queue.enqueue(5) // adds the element to the queue
queue.enqueue(6) // adds the element to the queue
queue.enqueue(7) // adds the element to the queue
console.log(queue.getUnderlyingList())
queue.dequeue() // returns the top element from queue and deletes it, returns 1
console.log(queue.getUnderlyingList()) // returns { value: 3, next: null }
module.exports = {
  Queue,
}
