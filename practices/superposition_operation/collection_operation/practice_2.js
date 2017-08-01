'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let arr = [];
  let temp;
  for(let value of  collection){
  	if(value % 2 != 0){
  		temp = value * 3 + 2;
  		arr.push(temp);
  	}
  }
  return arr;
  
}

module.exports = hybrid_operation_to_uneven;

