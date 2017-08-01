'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let mid;
  let input = collection.split("->");
  for(let i in input){
  	input[i] = Number(input[i]);
  }
  input = Array.from(input).sort(function sortNumber(a,b){
	return a - b;
	});
  if(input.length%2 == 0) mid = (input[Math.floor((input.length-1)/2)]+input[Math.ceil((input.length-1)/2)])/2;
  else mid = input[Math.floor(input.length/2)];
  return mid;
}

module.exports = compute_chain_median;
