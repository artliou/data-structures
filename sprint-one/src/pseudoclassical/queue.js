var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
  return this.length;
}; 

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.length;
};
