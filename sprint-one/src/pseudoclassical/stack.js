var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this.someInstance = {};
  this.length = 0;
  this.storage = {};
};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}; 

Stack.prototype.pop = function() {
  if (this.length > 0) {
    //pop
    this.length--;
    return this.storage[this.length];
  }
};

Stack.prototype.size = function() {
  return this.length;
};
