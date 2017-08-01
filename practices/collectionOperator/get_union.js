'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let collect = Array.from(new Set(collection_a));
  let findCollect = Array.from(new Set(collect));
  let temp;
  for(let value of collection_b){
  	temp =1;
  	for(let index of findCollect){
  		if(index == value){
  			temp = 0;
  		}
  	}
  	if(temp) collect.push(value);
  }
  return collect;
}

module.exports = get_union;

