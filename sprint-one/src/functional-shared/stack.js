var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.sizeOfStack = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.sizeOfStack;
};

stackMethods.push = function(value) {
  this[++this.sizeOfStack] = value;
};

stackMethods.pop = function() {
  var result = this[this.sizeOfStack];
  this.sizeOfStack = Math.max(--this.sizeOfStack, 0);
  return result;
};