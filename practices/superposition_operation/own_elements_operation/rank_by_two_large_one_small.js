'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let temp;
  let collect = collection.sort(function(a,b){
  	return a - b;
  });
  let length = Math.floor(collect.length/3);
  for(let i=0;i<length;i++){
  	temp = collect[i*3];
  	collect[i*3] = collect[i*3+1];
  	collect[i*3+1] = collect[i*3+2];
  	collect[i*3+2] = temp;
  }
  return collect;
}
module.exports = rank_by_two_large_one_small;
