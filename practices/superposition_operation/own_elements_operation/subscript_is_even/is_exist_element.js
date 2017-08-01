'use strict';
var is_exist_element = function(collection,element){
	let collect = [];
	for(let i = 0; i<collection.length ;i +=2){
		collect.push(collection[i]);
	}
	for(let value of collect){
		if(value==element) return true;
	}
	return false;
};
module.exports = is_exist_element;
