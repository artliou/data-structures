var Queue = function() {
  var someInstance = {};
  var storage = {};
  var size = 0;

  //Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
    return size;
  };

  //Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    if (size > 0) {
      var ripped = storage[0];
      var someArr = Array.from(storage);

      for (var i = 1; i < size; i++) {
        storage[i - 1] = storage[i];
      }
      
      size--;
      return ripped;
    }    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
