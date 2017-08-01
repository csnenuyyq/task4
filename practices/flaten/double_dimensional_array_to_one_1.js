'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let collect = [];
  for(let i in collection){
  	if(typeof(collection[i]) == "number") collect.push(collection[i]);
  	else {
  		for(let j in collection[i]){
  			collect.push(collection[i][j]);
  		}
  	}
  }
  return collect;
}

module.exports = double_to_one;
