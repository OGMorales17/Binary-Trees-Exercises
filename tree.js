/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val;
    function sumHelper(node) {
      // go through all the childrens for a Node
      for (let child of node.children) {
        // accumulate all the values
        total += child.val;
        // if it has any children
        if (child.children.length > 0) {
          //recurse with the child as the root
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvenHelper(node) {
      // got through all the children for a Node
      for (let child of node.children) {
        // count the child if the value is even
        if (child.val % 2 === 0) count++;
        // if has any children
        if (child.children.length > 0) {
          // recurse with the child as the root
          countEvenHelper(child)
        }
      }
    }
    countEvenHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val > lowerBound ? 1 : 0;

    function countGreaterHelper(node) {
      // go through all the children for a node
      for (let child of node.children) {
        // count the child if the value is greater tha the lowerBound
        if (child.val > lowerBound) count++;
        // if it has any children
        if (child.children.length > 0) {
          countGreaterHelper(child);
        }
      }
    }
    countGreaterHelper(this.root);
    return count;

  }
}

module.exports = { Tree, TreeNode };
