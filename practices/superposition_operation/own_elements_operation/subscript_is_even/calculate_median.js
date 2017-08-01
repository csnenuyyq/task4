'use strict';
var calculate_median = function(collection){
	let collect = [];
	for(let value of collection){
		if(value % 2 == 0){
			collect.push(value)
		}
	}
	let mid;
	if(collect.length % 2 !=0){
		mid = collect[Math.floor(collect.length/2)];
	}
	else mid = (collect[Math.floor((collect.length-1)/2)]+collect[Math.ceil((collect.length-1)/2)])/2;
	return mid;
};
module.exports = calculate_median;
