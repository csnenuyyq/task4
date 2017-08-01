function collect_same_elements(collectionA, collectionB) {
  //在这里写入代码
    var same=[];
    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<collectionB.value.length;j++){
            if(collectionA[i]==collectionB.value[j]){
                same.push(collectionA[i]);
                continue;
            }
        }
    }
  return same;

}

module.exports = collect_same_elements;
