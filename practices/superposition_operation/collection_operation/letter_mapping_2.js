'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let letter = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
  let num=0;
  for(let value of collection){
  	num += value;
  }
  num = Math.ceil(num/collection.length);
  return letter[num];
}

module.exports = average_to_letter;

