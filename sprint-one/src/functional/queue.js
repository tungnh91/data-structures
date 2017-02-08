var Queue = function() {
  var someInstance = {};  
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    storage.size = value;
  };

  someInstance.dequeue = function() {
    size--;
    if(size <0) {
      size =0;
    }
    return storage.size;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
