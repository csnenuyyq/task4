'use strict';

function get_integer_interval(number_a, number_b) {
let collect=[];
  //在这里写入代码
  if(number_a==number_b){
  	
  	collect.push(number_a);
  	
  	return collect;
  }
  else if(number_a<number_b){
  	for(let i=number_a;i<=number_b;i++){
  		
  		collect.push(i);
  		
  	}
  }
  else {
  	for(let i=number_a;i>=number_b;i--){
  		
  		collect.push(i);
  		
  	}
  }
  return collect;
}

module.exports = get_integer_interval;

