/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/
//ES2015 문법
const string1 = '안녕하세요';
const string2 = '반갑습니다';
const greeting = `${string1} ${string2}!!!`;

console.log(greeting);

//
const product = { name: '도서', price: '4200원' };

// const message = `
// 제품 ${product.name}의 가격은 ${product.price}입니다
// `;
//안에서 함수를 쓸수 있다.
const message = `
제품 ${product.name.replace('도서', '책')}의 가격은 ${product.price}입니다
`;
console.log(message);
