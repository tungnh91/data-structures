

// Instantiate a new graph
var Graph = function(value) {
  this.value = value;
  this.storage = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push(new Graph(node));
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] !== undefined) {
      if (this.storage[i].value === node) {
        return true;
      }
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      delete this.storage[i];
    }
  }
  for (var j = 0; j < this.edges.length; j++) {
    // for (var k = 0; k < this.storage.length; k++) {
    if (this.edges[j] === node) {
      this.edges[j] = undefined;
      if (j % 2 === 0) {
        this.edges[j + 1] = undefined;
      } else {
        this.edges[j - 1] = undefined;
      }
    }
    // }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i += 2) {
    if ((this.edges[i] === fromNode && this.edges[i + 1] === toNode) ||
      (this.edges[i + 1] === fromNode && this.edges[i] === toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push(fromNode);
  this.edges.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i += 2) {
    if ((this.edges[i] === fromNode && this.edges[i + 1] === toNode) ||
      (this.edges[i + 1] === fromNode && this.edges[i] === toNode)) {
      this.edges[i] = undefined;
      this.edges[i + 1] = undefined;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


