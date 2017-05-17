var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  
  _.extend(someInstance, queueMethods);
  
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}; 

queueMethods.dequeue = function() {
  if (this.length > 0) {
    var ripped = this.storage[0];
    var someArr = Array.from(this.storage);
    
    for (var i = 1; i < this.length; i++) {
      this.storage[i - 1] = this.storage[i];
    }
    this.length--;
    return ripped;
  }    
};

queueMethods.size = function() {
  return this.length;
};