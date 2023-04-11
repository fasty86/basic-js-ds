const { NotImplementedError } = require("../extensions/index.js")

const { Node } = require("../extensions/list-tree.js")

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(data = null) {
    // console.log("constructor", data)
    this._root = new Node(data)
  }

  root() {
    // console.log(this._root)
    return this._root.data == null ? null : this._root
  }

  add(data) {
    // console.log("Test", this)
    if (!!this._root.data === false) this._root = new Node(data)
    else {
      let current = this._root
      let next = current
      while (next != null) {
        if (data > next.data) {
          current = next
          next = next.right
        } else {
          current = next
          next = next.left
        }
      }
      if (current.data > data) current.left = new Node(data)
      else current.right = new Node(data)
    }
  }

  has(data) {
    let current = this._root
    let next = current
    while (next != null) {
      if (next.data == data) return true
      else if (next.data > data) {
        current = next
        next = next.left
      } else {
        current = next
        next = next.right
      }
    }
    return false
  }

  find(data) {
    // console.log(this)
    let current = this._root
    let next = current
    while (next != null) {
      if (next.data == data) return next
      else if (next.data > data) {
        current = next
        next = next.left
      } else {
        current = next
        next = next.right
      }
    }
    return null
  }

  // remove(data) {
  //   let exist = this.has(data)
  //   // проверка на существование записи
  //   if (exist) {
  //     //  ищем запись и ее непосредственного родителя
  //     let current = this._root
  //     let next = current
  //     while (next != null) {
  //       if (next.data == data) break
  //       else if (next.data > data) {
  //         current = next
  //         next = next.left
  //       } else {
  //         current = next
  //         next = next.right
  //       }
  //     }
  //     let node = next
  //     // если узел не имеет потомков
  //     if (node.right == null && node.left == null)
  //       // обнуляем ссылку на узел у родителя
  //       node == current.left ? (current.left = null) : (current.right = null)
  //     // если есть только правый потомок, заменяем им ссылку на удаляемый узел у родителя
  //     else if (node.left == null && node.right != null)
  //       node == current.right
  //         ? (current.right = node.right)
  //         : (current.left = node.right)
  //     // если есть только левый потомок, заменяем им ссылку на удаляемый узел у родителя
  //     else if (node.right == null && node.left != null)
  //       node == current.right
  //         ? (current.right = node.left)
  //         : (current.left = node.left)
  //     // если есть оба потомка
  //     else {
  //       // ищем узел с минимальным значением в потомках справа от удаляемого узла
  //       // let minRight = this.min(node == this._root ? node.right : node)
  //       let minRight = this.min(node.right)
  //       let minRightNode = this.find(minRight) // минимальное значение
  //       let parent = this.parent(minRight) // родительский узел узла с мин значением
  //       // console.log(parent)
  //       if (minRightNode.left == null && minRightNode.right == null) {
  //         parent.left = null
  //         node.data = minRight
  //       } else {
  //         node.data = minRight
  //         node.right = minRightNode.right
  //       }
  //     }
  //   }
  // }
  remove(data) {
    this._root = this.deleteNode(this._root, data)
  }

  deleteNode(root = this._root, data) {
    if (root == null) return root
    if (data < root.data) root.left = this.deleteNode(root.left, data)
    else if (data > root.data) root.right = this.deleteNode(root.right, data)
    else {
      if (root.left == null) return root.right
      else if (root.right == null) return root.left

      root.data = this.min(root.right)
      root.right = this.deleteNode(root.right, root.data)
    }

    return root
  }

  min(current = this._root) {
    let next = current
    while (next != null) {
      current = next
      next = next.left
    }
    return current.data
  }
  // min(root = this._root) {
  //   let minv = root.data
  //   while (root.left != null) {
  //     minv = root.left.data
  //     root = root.left
  //   }
  //   return minv
  // }
  max(current = this._root) {
    let next = current
    while (next != null) {
      current = next
      next = next.right
    }
    return current.data
  }
  parent(data) {
    let current = this._root
    let next = current
    while (next != null) {
      if (next.data == data) break
      else if (next.data > data) {
        current = next
        next = next.left
      } else {
        current = next
        next = next.right
      }
    }
    return current
  }
}

let tree = new BinarySearchTree()

tree.add(50)
tree.add(30)
tree.add(20)
tree.add(40)
tree.add(70)
tree.add(60)
tree.add(80)
// tree.add(17)
// tree.add(1)
// tree.add(3)
// console.log(tree.root())
// tree.remove(20)
// tree.remove(30)
// tree.remove(50)
tree.remove(50)
// tree.remove(70)
tree.remove(60)
// tree.remove(30)
console.log(tree.root())
// console.log(tree.parent(80))
// console.log(tree.root())
// console.log(tree.has(17))
// console.log(tree.has(21))
// console.log(tree.find(31))
// console.log(tree.min())

module.exports = {
  BinarySearchTree,
}
