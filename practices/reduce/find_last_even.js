'use strict';

function find_last_even(collection) {
  //在这里写入码
  for (var i = collection.length - 1; i >= 0;i--) {
  	if(collection[i]%2==0) return Number(collection[i]);
  }
}

module.exports = find_last_even;
