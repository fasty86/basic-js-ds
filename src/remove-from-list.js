const { NotImplementedError } = require("../extensions/index.js")

const { ListNode } = require("../extensions/list-node.js")

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// let testList = new ListNode(1)
// testList.next = new ListNode(2)
// testList.next.next = new ListNode(3)
// testList.next.next.next = new ListNode(4)
// testList.next.next.next.next = new ListNode(5)
// testList.next.next.next.next.next = new ListNode(3)
// console.log(testList)
initial = convertArrayToList([3, 1, 2, 3, 4, 5])
function removeKFromList(l, k) {
  let start = l
  let prev = l
  let counter = 0
  while (l.next) {
    if (l.value == k) {
      if (!counter) {
        l.value = l.next.value
        l.next = l.next.next
        prev = l
      } else {
        prev.next = l.next
        l = l.next
      }
    } else {
      prev = l
      l = l.next
    }

    // console.log(prev)
    // console.log(l)
    counter += 1
  }
  if (l.value == k) {
    prev.next = null
  }
  return start
}
printList(initial)
removeKFromList(initial, 5)
printList(initial)

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur)
      node.next = acc
      return node
    }

    return new ListNode(cur)
  }, null)
}
function printList(list) {
  let res = []
  while (list.next) {
    res.push(list.value)
    list = list.next
  }
  res.push(list.value)
  console.log(res)
}

module.exports = {
  removeKFromList,
}
