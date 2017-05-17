var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.size + 1] = value;
    size++;
    return size;
  };

  someInstance.pop = function() {      
    var out = someInstance[someInstance.size - 1];
    //this.splice(-1);
    size--;
    if (size <= 0) {
      size = 0;
    }
    return out;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
