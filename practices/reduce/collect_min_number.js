'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  let min = collection[0];
  for(let value of collection){
  	if(value<min) min = value;
  }
  return min;
}


module.exports = collect_min_number;

