'use strict'
function create_updated_collection(collectionA, objectB) {
	var temp;
	for(var i=0;i< objectB.value.length;i++){
      for(var j=0;j<collectionA.length;j++){
          if(objectB.value[i]==collectionA[j].key){
              temp = Math.floor(collectionA[j].count/3);
              collectionA[j].count -= temp;
          }
      }
  }
  return collectionA;
}

module.exports = create_updated_collection;
