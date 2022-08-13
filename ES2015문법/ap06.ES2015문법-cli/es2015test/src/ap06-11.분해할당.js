/*
 (구조) 분해 할당에 대해서 알아본다.


*/

const points = [20, 30, 40];
//배열만들기

//원래 배열 쪼개는 법
const x1 = points[0]; //20
const y1 = points[1]; //30
const z1 = points[2]; //40

console.log(x1, y1, z1);

//한번에 하는 법
const [x2, y2, z2] = points;
//debugger;
//풀어쓰면
//const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2);

//f5 debugger run 누르면 debugconsole 창에 나옴
//C:\Program Files\nodejs\node.exe .\ES2015문법\ap06.ES2015문법-cli\es2015test\src\ap06-11.분해할당.js
//20 30 40
//19번줄에 debugger쓰면 x2,y2,z2마우스 올리면 203040이 나온다.
// f5누르면 다음 디버거 포인트 혹은 없으면 끝남

//두번째값 무시하기
const [x3, , z3] = points; // [20,30,40]; f5누르면debugconsole 창에 나옴
console.log(x3, z3); //20 40
//세번째값 무시하기
const [x4, , , w4] = points; // [20,30,40];f5누르면debugconsole 창에 나옴
console.log(x4, w4); //20 undefined

//배열안에 함수를 넣을 수 있다. 함수는 값이기 때문
const [x5, , , w5] = [20, 30, 40, () => console.log('xxxx')];

console.log(x5, w5); //20 () => console.log('xxxx')
w5(); //xxxx

//객체의 분해 할당
const car = {
    type: 't',
    color: 'S',
    model: 2021
};
//ES5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1); //t S 2021

//ES2015
const { type, color, model, gear } = car;
console.log(type1, color1, model, gear); //t S 2021 undefined

//ES2015
const { type: type2, color: color2, model: model2, gear2 } = car;
console.log(type2, color2, model2, gear2); //t S 2021 undefined

const func1 = ({ type, color }) => {
    console.log(type); //t
    console.log(color); //s
};

func1(car);
//한줄로가능
//const {type ,color, gear}= car

const func2 = function (car) {
    console.log(car.type); // ?
    console.log(car.color); // ?}
};
func2(car);
