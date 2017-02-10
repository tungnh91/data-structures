var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.children[0].value === target) {
    return true;
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
