'use strict';
var map_to_four_multiples_add_one = function(collection){
  for(let value in collection){
  	collection[value] = collection[value]*4+1;
  }
  return collection;
};

module.exports = map_to_four_multiples_add_one;
