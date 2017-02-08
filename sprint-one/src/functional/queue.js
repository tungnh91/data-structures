var Queue = function() {
  var someInstance = {};  
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    size--;
    if (size < 0) {
      size = 0;
    }
    var keys = [];
    for (var key in storage) {
      keys.push(parseInt(key));
    }
    var firstIn = Math.min.apply(null, keys);
    var removed = storage[firstIn];
    delete storage[firstIn];
    for (let k in storage) {
      storage[k - 1] = storage[k];
      delete storage[k];
    }
    return removed;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
