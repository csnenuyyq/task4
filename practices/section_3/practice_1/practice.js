'use strict'
function create_updated_collection(collectionA, objectB) {
  for(var i=0;i< objectB.value.length;i++){
      for(var j=0;j<collectionA.length;j++){
          if(objectB.value[i]==collectionA[j].key){
              collectionA[j].count--;
          }
      }
  }
  return collectionA;
}

module.exports = create_updated_collection;
