const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i=0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      
      return collection
    },

    map: function(collection, callback) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      return newCollection.map(callback)
      
    },

    reduce: function(collection, callback, acc) {
       let value = collection.reduce(function(acc, val, collection) {
            return acc + val;
       }, 0);
       return value;
    },

     first: function(obj) {
      let keys = [];
      Object.keys(obj).map((obj) => keys.push(obj));
    
      return keys;
    },
    
    keys: function(obj) {
      let keys = [];
      Object.keys(obj).map((obj) => keys.push(obj));
    
      return keys;
    },
    
    values: function(obj) {
      let values = [];
      Object.values(obj).map((obj) => values.push(obj));
    
      return values;
    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
