/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

//rest 연산자 vs spread 연산자
const cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]); // "서울", "부산", "제주"
console.log(...cities); // "서울", "부산", "제주"

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];

//---------------------
//east.concat(west);
//배열의 concat을쓸경우 east에 3개의 변수가 붙어있는데 west가 east의 끝에 붙여짐
//east는 안바뀜 3개의 변수를 가지고 있다.

// const countries = [...east, ...west]; //['U', 'K', 'T','N', 'C', 'G']
// console.log(east);
// console.log(west);
// console.log(countries);

// east = countries;
// //불변객체를 바꿀수 있다.
//---------------------

const countries = [...east, ...west]; //['U', 'K', 'T','N', 'C', 'G']
console.log(east);
console.log(west);
console.log(countries);

let lakes = ['경포호', '화진포', '송지호', '청초호'];
let [first, ...rest] = lakes; // ...rest : rest 연산자
console.log(first); // "경포호"
console.log(rest); // ["화진포", "송지호", "청초호"]

//const east = ['U', 'K', 'T'];
// const west = ['N', 'C', 'G'];
let [city1, ...cityrest] = [...east, ...west];

//  [city1, ...cityrest] = ['U','K', 'T', 'N', 'C', 'G'];
console.log(city1); //U
console.log(cityrest); //['K', 'T', 'N', 'C', 'G']
// ...cityrest: rest 연산자 , [...east, ...west] : spread 연산자

//car2로 업데이트 된다.
const car1 = {
    type: 't1',
    color: 'S1',
    model: 2017
};
const car2 = {
    type: 't2',
    color: 'S2',
    model: 2019
};
const { type } = car1;
console.log(type); // t1
const func = function ({ type }) {
    console.log(type); // type 값은 무엇인가? t2
};
func({ ...car1, ...car2 });

///교재 책 46페이지
const moring = {
    breakfast: '미역국',
    lunch: '삼치구이'
};
const dinner = '스테이크';
//

const meals = {
    ...moring,
    dinner //dinner:dinner,
};
console.log(meals); //{breakfast: '미역국', lunch: '삼치구이', dinner: '스테이크'}
