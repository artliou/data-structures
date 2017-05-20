//Create a doubly-linked-list, with all the methods of your linked list, and add the following properties:

var doublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  doublyLinkedList.prototype.addToTail = function(value) {
    var node = Node(value);
    if (list.tail !== null) {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._length++;
    return node;
  };

  //An .addToHead() method which takes a value and adds it to the front of the list.
  doublyLinkedList.prototype.addToHead = function(value) {
    var node = Node(value);
    if (list.head) {
      this.head.previous = node;
      this.head.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this._length++;
    return node;
  };

  doublyLinkedList.prototype.removeHead = function() {
    if (list.head !== null) {
      var deleteNode = list.head;
      list.head = list.head.next;
      deleteNode.next === undefined;
      return deleteNode.value;
    } 
  };

  //Kept as is
  doublyLinkedList.prototype.contains = function(target) {
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


  //A .removeTail() method which removes the last node from the list and returns its value.
  doublyLinkedList.prototype.removeTail = function() {
    if (list.tail) {
      var deleteNode = list.tail;
      list.tail = list.tail.previous;
      //deleteNode.next === undefined;
      return deleteNode.value;
    } 
  };

  return doublyLinkedList;
};

//Note: each node object will need to have a new .previous property pointing to the node behind it 
//(or to null when appropriate); this is what makes it a doubly-linked list.
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;
  return node;
};

