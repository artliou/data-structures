var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.parent = null;
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  if (this !== null) { //how are they adding the root node? do we need this check
    this.children.push(child);
    child.parent = this;
  } else {
    this.children.push(child);
  }
};

treeMethods.contains = function(target) {
  let i = false;
  
  let childContains = function(target, tree) {
    if (tree.value === target) {
      i = true;
    } 
    if (tree.children.length !== 0) {
      _.each(tree.children, child => { childContains(target, child); });
    }
  };
  
  childContains(target, this);
  return i;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
//Ad Child: 1
//Contains n