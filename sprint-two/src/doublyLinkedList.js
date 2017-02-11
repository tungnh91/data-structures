var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    var oldTail = list.tail;
    if (list.head === null) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
      list.tail.previous = oldTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    var formerHead = list.head;
    list.head = list.head.next;
    list.head.previous = null;
    return formerHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (true) {
      if (currentNode.value === target) {
        return true;
      }
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;     
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
