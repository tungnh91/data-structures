var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeOfStack = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return Math.max(this.sizeOfStack, 0);
};

Stack.prototype.push = function(value) {
  this.storage[++this.sizeOfStack] = value;
};

Stack.prototype.pop = function() {
  return this.storage[this.sizeOfStack--];
};

// var stack = new Stack();
