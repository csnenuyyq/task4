'use strict';
function map_to_even(collection){
  for(let value in collection){
  	collection[value] *= 2;
  }
  return collection;
}
module.exports = map_to_even;
