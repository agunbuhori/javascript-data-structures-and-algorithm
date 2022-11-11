class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;

  constructor(value: number) {
    this.value = value;
  }
}

class BinarySearchTree {
  root: TreeNode;

  insert(value: number) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root: TreeNode, newNode: TreeNode) {
    if (root.value > newNode.value) {
      if (!root.left) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (!root.right) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root: TreeNode, value: number): boolean {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else if (root.value < value) {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root: TreeNode) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root: TreeNode) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root: TreeNode) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(root: TreeNode) {
    const queue: TreeNode[] = [];

    queue.push(root);

    while (queue.length) {
      const curr = queue.shift();

      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root: TreeNode): number {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root: TreeNode): number {
    if (!root.right) {
      return root.value;
    } else {
      return this.min(root.right);
    }
  }

  delete(value: number) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root: TreeNode, value: number) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(14);
bst.insert(19);

//      10
//    /   \
//   5     15
//  / \    / \
// 3   7  14 19

console.log(bst.search(bst.root, 15)); // true
console.log(bst.search(bst.root, 18)); // false

// deep first search (DFS)
console.log("preorder traversal");
bst.preOrder(bst.root); // 10 5 3 7 15
console.log("inorder traversal");
bst.inOrder(bst.root); // 3 7 5 10 15
console.log("postorder traversal");
bst.postOrder(bst.root); // 3 5 7 15 10

// breadth first search (BFS)
console.log("level order");
bst.levelOrder(bst.root);

console.log("before delete");
bst.levelOrder(bst.root);
bst.delete(10);
console.log("after delete");
bst.levelOrder(bst.root);
