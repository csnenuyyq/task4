'use strict';
var even_asc_odd_desc = function(collection){
	let single = [];
	let double = [];
	for(let value of collection){
		if(value % 2 !=0) single.push(value);
		else double.push(value);
	}
	single.sort(function sortNumber(a,b){
		return b - a;
	});
	double.sort(function sortNumber(a,b){
		return a - b;
	});
	let all = double.concat(single);
	return all;
};
module.exports = even_asc_odd_desc;
