'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let sum=0;
  for(let value of collection){
  	sum += value;
  }
  sum = sum*3 + 2*collection.length;
  return sum;
}

module.exports = hybrid_operation;

