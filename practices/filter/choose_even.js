'use strict';

function choose_even(collection) {

  //在这里写入代码
  let even = [];
  for(let value of collection){
  	if(value%2==0) even.push(value);
  }
  return even;
}

module.exports = choose_even;
