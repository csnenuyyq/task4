'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let letter = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let collect = [];
  if(number_a==number_b){
  	if(number_a>26){
  		collect.push('a'+letter[number_a-26]);
  	}else collect.push(letter[number_a]);
  	
  	return collect;
  }
  else if(number_a<number_b){
  	for(let i=number_a;i<=number_b;i++){
  		if(i%26 != 0){
  			collect.push(letter[Math.floor(i/26)]+letter[i%26]);
  		}else collect.push(letter[i/26-1]+letter[26]);
  		
  	}
  }
  else {
  	for(let i=number_a;i>=number_b;i--){
  		if(i%26 != 0){
  			collect.push(letter[Math.floor(i/26)]+letter[i%26]);
  		}else collect.push(letter[i/26-1]+letter[26]);
  		
  	}
  }
  return collect;
}

module.exports = get_letter_interval_2;

