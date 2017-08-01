'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let setCollection = Array.from(new Set(collection));
  return setCollection;
}

module.exports = choose_no_repeat_number;
