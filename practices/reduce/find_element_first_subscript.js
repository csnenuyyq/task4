'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  for(let i in collection){
  	if(collection[i]==element){
  		return Number(i);
  	}
  }
}

module.exports = calculate_elements_sum;

