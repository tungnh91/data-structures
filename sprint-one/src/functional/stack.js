var Stack = function() {
  var someInstance = {};
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[++size] = value;
  };

  someInstance.pop = function() {
    return someInstance[size--];
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};
