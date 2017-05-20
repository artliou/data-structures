var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    } else {
      list.head = node;
    }

    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var deleteNode = list.head;
      list.head = list.head.next;
      deleteNode.next === undefined;
      return deleteNode.value;
    } 
  };

  list.contains = function(target) {
    let currentNode = list.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
//addToTail: 1 
//removeHead 1
//contains: n