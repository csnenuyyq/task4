'use strict';
function one_add_next_multiply_three(collection){
	let result = [];
	let temp;
	for(let i=0;i<collection.length-1; i++){
		
			temp = (collection[i] + collection[i+1])*3;
			result.push(Number(temp));
		

	}
	return result;
}
module.exports = one_add_next_multiply_three;
