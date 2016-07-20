// JavaScript Condition Statement
// if ~ else ~ else if
// switch ~ case ~ break ~ default
// condition ? result === true : result === false
// A || B , A && B

// JavaScript Loop Statement
// while
// do ~ while
// for
// for ~ in

// Javascript Object
// 1. Built-in (Native) Objects
// 2. Custom, User Define Objects

var desk = {};

desk.name = '원목 탁자';
desk.material = '나무';

/**
 * --------------------------------
 * 함수를 만들어 봅시다.
 * ----------------------------- */
// 전달된 두 수의 합을 구하는 함수를 만들어 보시오.
// sum(n1, n2)
// sum(9, 29);
// sum(30, -123);

// 변수 정의
// var 변수이름;

// 함수 정의
// function 함수이름() {}
// function 함수이름(전달인자) {}
// function 함수이름(전달인자1, 전달인자2, ..., 전달인자N) {}

// function sum(n1, n2) {
  // console.log('n1:', n1);
  // console.log('n2:', n2);
  // return n1 + n2;
// }

function sum(n1,n2,n3,n4,n5,n6) {

  if(n1) {
    n1 = n1;
  } else {
    n1 = 0;
  }
  if(n2) {
    n2 = n2;
  } else {
    n2 = 0;
  }
  if(n3) {
    n3 = n3;
  } else {
    n3 = 0;
  }
  if(n4) {
    n4 = n4;
  } else {
    n4 = 0;
  }
  if(n5) {
    n5 = n5;
  } else {
    n5 = 0;
  }
  if(n6) {
    n6 = n6;
  } else {
    n6 = 0;
  }
  return n1 + n2 + n3 + n4 + n5 + n6;
}

sum(10, 8);

console.log('n1:', n1);
console.log('n2:', n2);