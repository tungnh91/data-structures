var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.sizeOfStack = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return Math.max(this.sizeOfStack, 0);
};

stackMethods.push = function(value) {
  this[++this.sizeOfStack] = value;
};

stackMethods.pop = function() {
  var result = this[this.sizeOfStack--];
  return result;
};

