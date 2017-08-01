'use strict';

function grouping_count(collection) {

  //在这里写入代码
  let collectSet = Array.from(new Set(collection));
  let temp= {};
  let count;
  let str;
  for(let value of collectSet){
  	count = 0;
  	for(let i in collection){
  		if(collection[i] == value) count ++;
  	}
  	str = ''+value;
  	temp[str] = count;
  }
  return temp;
}

module.exports = grouping_count;
