'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let sum = 0;
  for(let i in collection){
  	if(collection[i] % 2 != 0){
  		collection[i] = collection[i] * 3 + 5;
  		sum += collection[i];
  	}
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

