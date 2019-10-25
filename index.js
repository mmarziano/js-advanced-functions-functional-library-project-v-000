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
      newCollection.map(callback)
      console.log('new', newCollection)
      console.log('c', collection)
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
