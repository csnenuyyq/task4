'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  let collect = [];
  for(let value of collection){
  	if(value%2==0){
  		collect.push(value);
  	}
  }
  return collect;
}

module.exports = collect_all_even;
