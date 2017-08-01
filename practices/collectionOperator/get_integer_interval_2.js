'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let collect=[];
  //在这里写入代码
  if(number_a==number_b){
  	if(number_a%2==0){
  		collect.push(number_a);
  	}
  	return collect;
  }
  else if(number_a<number_b){
  	for(let i=number_a;i<=number_b;i++){
  		if(i%2==0){
  			collect.push(i);
  		}
  	}
  }
  else {
  	for(let i=number_a;i>=number_b;i--){
  		if(i%2==0){
  			collect.push(i);
  		}
  	}
  }
  return collect;
}

module.exports = get_integer_interval_2;
