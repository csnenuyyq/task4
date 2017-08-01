'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  if(collection_b.length!=collection_a.length) return false;
  for(let i in collection_a){
  	if(collection_a[i]!=collection_b[i]) return false;
  }
  return true;
}

module.exports = compare_collections;


