var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newHead = Node(value);
    var oldHead = list.head;
    if (list.head === null) {
      list.tail = newHead;
    } else {
      oldHead.previous = newHead;
      newHead.next = oldHead;
    }
    list.head = newHead;
  };

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
    if (list.head.next === null) {
      list.head = null;  
    } else {
      list.head = list.head.next;
      list.head.previous = null;
    }
    return formerHead.value;
  };

  list.removeTail = function() {
    var formerTail = list.tail;
    list.tail = formerTail.previous;
    list.tail.next = null;
    return formerTail;    
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
