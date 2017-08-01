'use strict';
var calculate_average = function(collection){
	let count = 0;
	let amount = 0;
	for(let value of collection){
		if(value % 2 == 0){
			count += value;
			amount ++;
		} 
	}
	return count/amount;
};
module.exports = calculate_average;
