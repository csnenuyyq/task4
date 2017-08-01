'use strict';

function compute_median(collection) {
  //在这里写入代码
  let mid;
  let collect = Array.from(collection).sort(function sortNumber(a,b){
	return a - b;
	});
  if(collect.length%2 == 0) mid = (collect[Math.floor((collect.length-1)/2)]+collect[Math.ceil((collect.length-1)/2)])/2;
  else mid = collect[Math.floor(collect.length/2)];
  return mid;
}

module.exports = compute_median;


