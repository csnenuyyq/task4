'use strict';
var map_to_three_multiples = function(collections){
  for(let value in collections){
  	collections[value] *=3;
  }
  return collections;
};

module.exports = map_to_three_multiples;
