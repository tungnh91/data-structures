

var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._numberOfEntries = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var duplicateKey = false;
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1] = v;
      duplicateKey = true;
    }
  }
  if (!duplicateKey) {
    this._storage[index].push([k, v]);
    this._numberOfEntries++;
  }
  if (this._numberOfEntries / this._limit > .75) {
    this.doubleSize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i] !== undefined) {
        if (this._storage[index][i][0] === k) {
          return this._storage[index][i][1];         
        }
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = undefined;
      this._numberOfEntries--;
    }
  }
  if (this._numberOfEntries / this._limit < .25) {
    this.halveSize();
  }
};

HashTable.prototype.doubleSize = function() {
  var newTable = new HashTable(this._limit * 2);
  for (var i = 0; i < this._limit; i++) {
    if (this._storage[i] !== undefined) {
      for (j = 0; j < this._storage[i].length; j++) {
        if (this._storage[i][j] !== undefined) {
          newTable.insert(this._storage[i][j][0], this._storage[i][j][1]);
        }
      }
    }
  }
  this._limit = newTable._limit;
  this._storage = newTable._storage;
};

HashTable.prototype.halveSize = function() {
  var newTable = new HashTable(this._limit / 2);
  for (var i = 0; i < this._limit; i++) {
    if (this._storage[i] !== undefined) {
      for (j = 0; j < this._storage[i].length; j++) {
        if (this._storage[i][j] !== undefined) {
          newTable.insert(this._storage[i][j][0], this._storage[i][j][1]);
        }
      }
    }
  }
  this._limit = newTable._limit;
  this._storage = newTable._storage;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(n)
 * retrieve: O(n)
 * remove: O(n)
 */


