var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var found = false;

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      found = true;
      break;
    }
  }

  if (!found) {
    bucket.push([k, v]);
    this._count++;
  }

  if (this._count > 0.75 * this._limit) {
    this._limit = this._limit * 2;
    this._count = 0; 

    let oldStorage = this._storage;
    this._storage = LimitedArray(this._limit);

    oldStorage.each(bucket => {
      if (bucket !== undefined) {
        for (var i = 0; i < bucket.length; i++) {
          var tuple = bucket[i];
          this.insert(tuple[0], tuple[1]);
        }
      }
    });    
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var check = this._storage.get(index);
  if (!this._storage.get(index)) {
    return undefined;
  } 
  for (var i = 0; i < check.length; i++) {
    var test = check[i];
    if (test[0] === k) {
      return test[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var check = this._storage.get(index);
  if (!check) {
    return null;
  } 
  for (var i = 0; i < check.length; i++) {
    var test = check[i];
    if (test[0] === k) {
      check.splice(i, 1);
      this._count--;

      if (this._count < 0.25 * this._limit) {
        this._limit = this._limit / 2;
        this._count = 0; 

        let oldStorage = this._storage;
        this._storage = LimitedArray(this._limit);

        oldStorage.each(bucket => {
          if (bucket !== undefined) {
            for (var i = 0; i < bucket.length; i++) {
              var tuple = bucket[i];
              this.insert(tuple[0], tuple[1]);
            }
          }
        });    
      }
      return test[i];
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


