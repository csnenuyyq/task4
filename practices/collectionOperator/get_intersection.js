'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let collect = [];
  for(let valueb of collection_b){
  	for(let valuea of collection_a){
  		if(valuea==valueb){
  			collect.push(valuea);
  		}
  	}
  }
  return collect;
}

module.exports = get_intersection;
