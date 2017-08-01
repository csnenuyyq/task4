'use strict';

function amount_even(collection) {

  //在这里写入代码
  let sum=0;
  for(let value of collection){
  	if(value % 2 == 0) sum += value;
  }
  return sum;
}

module.exports = amount_even;
