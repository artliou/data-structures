var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  //Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    this.elements.push(value);
    length++;
  };

  //Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    var ripped = someInstance[0];
    someInstance.shift();
    return ripped;
    length--;
    return this.elements.shift();
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
