var Stack = function() {
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}; 

stackMethods.pop = function() {
  if (this.length > 0) {
    //pop
    this.length--;
    return this.storage[this.length];
  }
};

stackMethods.size = function() {
  return this.length;
};



