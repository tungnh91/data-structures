var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.sizeOfQueue = 0;
  return newQueue;
};

var queueMethods = {};


queueMethods.size = function() {
  return Math.max(this.sizeOfQueue, 0);
};

queueMethods.enqueue = function(value) {
  this[++this.sizeOfQueue] = value;
};

queueMethods.dequeue = function() {
  var firstIn = this['1'];
  for (var i = 1; i < this.sizeOfQueue + 1; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.sizeOfQueue--];
  return firstIn;
};