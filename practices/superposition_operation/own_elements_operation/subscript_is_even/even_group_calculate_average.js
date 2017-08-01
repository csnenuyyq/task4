'use strict';
var even_group_calculate_average = function(collection){
	let result = [];
	let count;
	let avr;
	let one=[];
	let two=[];
	let three=[];
	let temp=[];
	let double = [];
	for(let i in collection){
		if(i % 2 == 1) temp.push(collection[i]);
	}
	for(let value of temp){
		if(value % 2 ==0) double.push(value);
	}
	for(let value of double){
		if(value < 10) one.push(value);
		else if (value<100) two.push(value);
		else three.push(value);
	}
	if(one.length!=0){
		count =0;
		for(let value of one){
			count += value;
		}
		avr = count / one.length;
		result.push(avr);
	}
	if(two.length!=0){
		count =0;
		for(let value of two){
			count += value;
		}
		avr = count / two.length;
		result.push(avr);
	}
	if(three.length!=0){
		count =0;
		for(let value of three){
			count += value;
		}
		avr = count / three.length;
		result.push(avr);
	}
	if(result.length!=0) return result;
	else {
		let final = [0];
		return final;
	}
};
module.exports = even_group_calculate_average;
