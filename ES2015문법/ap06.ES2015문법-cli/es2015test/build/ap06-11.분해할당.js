'use strict';

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
var points = [20, 30, 40]; //배열만들기
//원래 배열 쪼개는 법

var x1 = points[0]; //20

var y1 = points[1]; //30

var z1 = points[2]; //40

console.log(x1, y1, z1); //한번에 하는 법

var x2 = points[0],
    y2 = points[1],
    z2 = points[2]; //debugger;
//풀어쓰면
//const [x2, y2, z2] = [20, 30, 40];

console.log(x2, y2, z2); //f5 debugger run 누르면 debugconsole 창에 나옴
//C:\Program Files\nodejs\node.exe .\ES2015문법\ap06.ES2015문법-cli\es2015test\src\ap06-11.분해할당.js
//20 30 40
//19번줄에 debugger쓰면 x2,y2,z2마우스 올리면 203040이 나온다.
// f5누르면 다음 디버거 포인트 혹은 없으면 끝남
//두번째값 무시하기

var x3 = points[0],
    z3 = points[2]; // [20,30,40]; f5누르면debugconsole 창에 나옴

console.log(x3, z3); //20 40
//세번째값 무시하기

var x4 = points[0],
    w4 = points[3]; // [20,30,40];f5누르면debugconsole 창에 나옴

console.log(x4, w4); //20 undefined
//배열안에 함수를 넣을 수 있다. 함수는 값이기 때문

var _ref = [
        20,
        30,
        40,
        function () {
            return console.log('xxxx');
        }
    ],
    x5 = _ref[0],
    w5 = _ref[3];
console.log(x5, w5); //20 () => console.log('xxxx')

w5(); //xxxx
//객체의 분해 할당

var car = {
    type: 't',
    color: 'S',
    model: 2021
}; //ES5

var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); //t S 2021
//ES2015

var type = car.type,
    color = car.color,
    model = car.model,
    gear = car.gear;
console.log(type1, color1, model, gear); //t S 2021 undefined
//ES2015

var type2 = car.type,
    color2 = car.color,
    model2 = car.model,
    gear2 = car.gear2;
console.log(type2, color2, model2, gear2); //t S 2021 undefined

var func1 = function func1(_ref2) {
    var type = _ref2.type,
        color = _ref2.color;
    console.log(type); //t

    console.log(color); //s
};
