var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.sizeOfQueue = 0;
  instance.storage = {};
  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return Math.max(this.sizeOfQueue, 0);
};

queueMethods.enqueue = function(value) {
  this.storage[++this.sizeOfQueue] = value;
};

queueMethods.dequeue = function() {
  //debugger;
  var keys = [];
  console.log('begin dequeue', this.storage);
  for (var key in this.storage) {
    // if (!Number.isNaN(parseInt(key))) {
    keys.push(parseInt(key));
    // }
  }
  var firstIn = Math.min.apply(null, keys);
  var remove = this.storage[firstIn];
  console.log('before delete', this.storage);
  delete this.storage[firstIn];
  console.log('after delete', this.storage);
  //debugger;
  for (let key in this.storage) {
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }
  console.log('shifted', this.storage);

  this.sizeOfQueue--;
  return remove;
};

// queue1 = Queue();
// queue1.sizeOfQueue;
// queue1.enqueue('c');
// queue2.enqueue('d');