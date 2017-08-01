'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let noSame = [];
  let count;
  for(let index of collection_a){
  	count = 1;
  	for(let value of collection_b){
  		if(index == value) count = 0;
  	}
  	if(count) noSame.push(index);
  }
  return noSame;
}

module.exports = choose_no_common_elements;
