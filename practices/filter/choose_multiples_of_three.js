'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let even = [];
  for(let value of collection){
  	if(value%3==0) even.push(value);
  }
  return even;
}

module.exports = choose_multiples_of_three;
