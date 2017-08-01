'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let begin = number;
  let arr = [];
  arr.push(begin);
  while(begin>0){
  	begin = Number((begin-interval).toFixed(1));
  	arr.push(begin);
  }
  return arr;
}

module.exports = spilt_to_zero;
