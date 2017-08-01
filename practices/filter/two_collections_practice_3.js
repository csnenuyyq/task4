'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let canDevide = [];
  let count;
  for(let index of collection_a){
  	for(let value of collection_b){
  		if(index%value==0) canDevide.push(index);
  	}
  }
  return canDevide;
}

module.exports = choose_divisible_integer;
