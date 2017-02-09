var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeOfQueue = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return Math.max(this.sizeOfQueue, 0);
};

Queue.prototype.enqueue = function(value) {
  this.storage[++this.sizeOfQueue] = value;
};

Queue.prototype.dequeue = function() {
  var firstIn = this.storage['1'];
  for (var i = 1; i < this.sizeOfQueue + 1; i++ ) {
    this.storage[i] = this.storage[i + 1]; 
  }
  delete this.storage[this.sizeOfQueue--];
  return firstIn;
};

