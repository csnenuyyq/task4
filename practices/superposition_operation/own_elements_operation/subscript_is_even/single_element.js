'use strict';
var single_element = function(collection){
	let collect = [];
	for(let i=1;i<=collection.length;i+=2){
		collect.push(collection[i]);
	}
	let collectSet = Array.from(new Set(collect));
	let mes=[];
	let temp;
	let count;
	for(let value of collectSet){
		count = 0;
		temp = {};
		for(let index of collect){
			if(value == index) count ++;
		}
		temp.num = value;
		temp.count =count;
		mes.push(temp);
	}
	let final = [];
	for(let i in mes){
		if(mes[i].count ==1){
			final.push(mes[i].num);
		}
	}
	return final;
};
module.exports = single_element;
