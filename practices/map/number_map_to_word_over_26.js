'use strict';
var number_map_to_word_over_26 = function(collection){
	for(let i in collection){
		if(collection[i]<=26){
			collection[i] = String.fromCharCode(96+Number(collection[i]));
		}
		else {
			collection[i] = 'a'+String.fromCharCode(96+Number(collection[i]-25));
		}
	}
	return collection;
};

module.exports = number_map_to_word_over_26;
