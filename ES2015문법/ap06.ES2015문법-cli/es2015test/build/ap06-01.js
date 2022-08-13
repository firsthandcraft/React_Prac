'use strict';

debugger;
var name = 'world';
console.log("Hello ".concat(name));

var getMessage = function getMessage(params) {
  console.log("Hello ".concat(params));
};

getMessage('sejoong'); // 터미널로 ES5로 변경
// "use strict";
// debugger;
// var name = 'world';
// console.log("Hello ".concat(name));
// var getMessage = function getMessage(params) {
//   console.log("Hello ".concat(params));
// };
// getMessage('sejoong');