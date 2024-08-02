class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        } else {
          break; // Value already exists
        }
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertRecursively(this.root, newNode);
    }
    return this;
  }

  _insertRecursively(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRecursively(node.left, newNode);
      }
    } else if (newNode.val > node.val) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRecursively(node.right, newNode);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current !== null) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return current;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this._findRecursively(this.root, val);
  }
  
  _findRecursively(node, val) {
    // If the current node is null, the value is not found in the subtree rooted at this node.
    if (node === null) {
      return undefined; // Return undefined instead of null to indicate the value was not found.
    }
    
    // If the current node's value matches the target value, return the node.
    if (node.val === val) {
      return node;
    }
    
    // If the target value is less than the current node's value, search the left subtree.
    if (val < node.val) {
      return this._findRecursively(node.left, val);
    }
    
    // If the target value is greater than the current node's value, search the right subtree.
    return this._findRecursively(node.right, val);
  }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
    this._dfsPreOrder(this.root, result);
    return result;
  }

  _dfsPreOrder(node, result) {
    if (node !== null) {
      result.push(node.val);
      this._dfsPreOrder(node.left, result);
      this._dfsPreOrder(node.right, result);
    }
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
    this._dfsInOrder(this.root, result);
    return result;
  }

  _dfsInOrder(node, result) {
    if (node !== null) {
      this._dfsInOrder(node.left, result);
      result.push(node.val);
      this._dfsInOrder(node.right, result);
    }
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
    this._dfsPostOrder(this.root, result);
    return result;
  }

  _dfsPostOrder(node, result) {
    if (node !== null) {
      this._dfsPostOrder(node.left, result);
      this._dfsPostOrder(node.right, result);
      result.push(node.val);
    }
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode !== null) {
        result.push(currentNode.val);
        queue.push(currentNode.left, currentNode.right);
      }
    }
    return result;
  }
}
module.exports = BinarySearchTree;
