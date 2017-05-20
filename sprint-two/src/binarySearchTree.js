var BinarySearchTree = function(value) {
  let BST = {};

  BST.value = value;
  BST.left = null;
  BST.right = null;  

  BST.insert = function(item) {
    if (item < value) {
      if (this.left === null) {
        this.left = BinarySearchTree(item);
      }
      return this.left.insert(item);
    } else if (item > value) {
      if (this.right === null) {
        this.right = BinarySearchTree(item);
      }      
      return this.right.insert(item);
    }
  };

  //Contains method
  BST.contains = function(item) {
    //var container = false;
    if (item === this.value) {
      return true;
    } else if (this.left === null) {
      return false;
    } else if (this.right === null) {
      return false;
    }
    return this.left.contains(item) || this.right.contains(item);
  };
  
  //depthFirstLog method: accepts a callback and
  //executes it on every value contained in the tree
  BST.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    } else if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  };

  return BST;
};

// BinarySearchTree = {value: 5, 
//  left: { value:0, left: { value:0, left: {} }}, 
//  right: { value: }}
// BinarySearchTree.left.left

/*
 * Complexity: What is the time complexity of the above functions?
 */
