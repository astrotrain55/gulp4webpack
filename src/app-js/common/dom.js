export default {

  all( collection, callback, emptyCallback = () => {} ) {
    let len = collection.length;
    if ( len ) {
      for ( let i = 0; i < len; i++ ) {
        callback(collection[i], i);
      }
    } else {
      emptyCallback();
    }
  },

  revAll( collection, callback, emptyCallback = () => {} ) {
    let len = collection.length;
    if ( len ) {
      for ( let i = len - 1; i >= 0; i-- ) {
        callback(collection[i], i);
      }
    } else {
      emptyCallback();
    }
  },

  first( collection, emptyCallback = () => {} ) {
    let len = collection.length;
    if ( len ) {
      return collection[0];
    } else {
      emptyCallback();
    }
  },

  last( collection, emptyCallback = () => {} ) {
    let len = collection.length;
    if ( len ) {
      return collection[len - 1];
    } else {
      emptyCallback();
    }
  }

};
