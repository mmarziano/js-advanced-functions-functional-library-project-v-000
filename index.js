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


    values: function(obj) {
      let values = [];
      Object.values(obj).map((obj) => value.push(obj));
    
      return values;
    },
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
