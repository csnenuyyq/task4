'use strict';
var number_map_to_word = function(collection){
	for(let i in collection){
		collection[i] = String.fromCharCode(96+Number(collection[i]));
	}
	return collection;
};

module.exports = number_map_to_word;
