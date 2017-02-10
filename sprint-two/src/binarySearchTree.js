var BinarySearchTree = function(value) {
  var bst = {};

  bst.value = value;
  bst.left;
  bst.right;
  
  bst.insert = function (value) {
    if (value < this.value) {
      if (this.left !== undefined) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
      }
    } else {
      if (this.right !== undefined) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    }
  };
  
  bst.contains = function (value) {

  };
  
  bst.depthFirstLog = function (value) {

  };
  
  return bst;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
