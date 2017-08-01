'use strict';

function even_to_letter(collection) {
	let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
	let collect = Array.from(collection);
	let arr = [];
	for(let i in collect){
		if(collect[i]%2==0){
			arr.push(letter[i]);

		}
	}
	return arr;
}

module.exports = even_to_letter;
