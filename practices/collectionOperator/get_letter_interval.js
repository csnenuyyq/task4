'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let letter = ['0','a','b','c','d','e'];
  let collect = [];
  if(number_a==number_b){
  	
  	collect.push(letter[number_a]);
  	
  	return collect;
  }
  else if(number_a<number_b){
  	for(let i=number_a;i<=number_b;i++){
  		
  		collect.push(letter[i]);
  		
  	}
  }
  else {
  	for(let i=number_a;i>=number_b;i--){
  		
  		collect.push(letter[i]);
  		
  	}
  }
  return collect;
}

module.exports = get_letter_interval;
