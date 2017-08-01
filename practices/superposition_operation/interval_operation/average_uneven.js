'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let sum=0;
  let count =0;
  for(let value of collection){
  	if(value % 2 != 0){
  		 sum += value;
  		 count ++;
  	}
  }
  return sum/count;
}

module.exports = average_uneven;
