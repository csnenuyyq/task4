'use strict';

function choose_common_elements(collectionA, collectionB) {
    var same=[];
    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<collectionB.length;j++){
            if(collectionA[i]==collectionB[j]){
                same.push(collectionA[i]);
                continue;
            }
        }
    }
  return same;
}

module.exports = choose_common_elements;
