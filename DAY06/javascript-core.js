/*! javascript-core.js © yamoo9.net, 2016 */

// 자바스크립트의 조건문 사용 권장방법

// 조건이 4개 이상 주어진다면 if ~ else if ~ else 조건 구문을 사용하는 것보다
// switch ~ case ~ default 조건 구문을 사용하는 것이 효율적이다.
// 인라인(inline) 안에서 조건 구문을 처리할 경우에는 3항식을 사용하는 것도 권장된다.

// var checkValue = null;
// var type_checkValue = typeof checkValue;

// typeof checkValue === 'string' ? 1 : typeof checkValue === 'number' ? 2 : typeof checkValue === 'boolean' ? 3 : typeof checkValue === 'undefined' ? 4 : 5;

// ※ typeof 치명적인 설계 오류!
// Array 데이터 유형을 'array'라고 이야기 하지 못하는 점
// Null 데이터 유형을 'null'이라고 이야기 하지 못하는 점

// if ( type_checkValue === 'string' ) {
//   console.log(1);
// } else if ( type_checkValue === 'number' ) {
//   console.log(2);
// } else if ( type_checkValue === 'boolean' ) {
//   console.log(3);
// } else if ( type_checkValue === 'undefined' ) {
//   console.log(4);
// } else {
//   console.log(5);
// }

/**
 * --------------------------------
 * Switch Case 구문
 * ----------------------------- */

// <keyword> ===> if, switch, while, for, ...
// <keyword> () {
// code
// }

// var checkValue = '0';
// var type_checkValue = typeof checkValue;

// switch( type_checkValue ) {
//   case 'number': console.log('this is number.'); break;
//   case 'string': console.log('this is string.'); break;
//   case 'boolean': console.log('this is boolean.'); break;
//   case 'function': console.log('this is function.'); break;
//   case 'object': console.log('this is object.'); break;
//   default: console.log('this is Array or Null or Undefined.');
// }


// 원시 데이터 유형: 숫자, 문자, 불리언
// 복합 데이터 유형: 함수, 배열, 객체

var data = 80;

// switch(typeof data) {
//   case 'number':
//     console.log('this is primitive data type.');
//     break;
//   case 'string':
//     console.log('this is primitive data type.');
//     break;
//   case 'boolean':
//     console.log('this is primitive data type.');
//     break;
//   case 'object':
//     console.log('this is complex data type.');
//     break;
//   case 'function':
//     console.log('this is complex data type.');
// }

switch(typeof data) {
  case 'number':
  case 'string':
  case 'boolean':
    console.log('this is primitive data type.');
    break;
  case 'object':
  case 'function':
    console.log('this is complex data type.');
}

// 왜? 조건이 많을 경우 if문 보다 switch ~ case 문인가?

// -------------------------------------------------------
// 조건에 따라 오늘 요일을 출력하는 프로그래밍 구문 작성
// -------------------------------------------------------
// 프로그래밍을 위해 요일을 기억(Memory)해야 한다.
// 변수는 하나의 값만 기억할 수 있기 때문에 여러 개의 데이터 유형을 기억하려면
// 여러 개의 데이터를 담을 수 있는 그릇이 필요하다. 자바스크립트에서는 그릇 역할을
// 배열(Array)이 수행한다.
var weekday = ['일', '월', '화', '수', '목', '금', '토'];
// Date 객체를 통해 오늘 요일을 반환한다(반환 값은 숫자 유형이다)
// 일(0),월(1),화(2),수(3),목(4),금(5),토(6)
var today_number = new Date().getDay(); // 6
// 배열 원소를 빼내는 방법은 배열 연산자([]) 안에 원소 인덱스를 넣어주면 된다.
var today = weekday[ today_number ];

// console.log(today);

// if문 유형으로 문장(Script)을 완성하자.
if ( today === '일' ) {
  console.log('오늘은 일요일입니다. 짜파게티 먹는 날~');
} else if ( today === '월' ) {
  console.log('오늘은 월요일입니다. 아.. 지긋지긋한 월요병... ㅠㅡㅠ');
} else if ( today === '화' ) {
  console.log('오늘은 화요일입니다.');
} else if ( today === '수' ) {
  console.log('오늘은 수요일입니다.');
} else if ( today === '목' ) {
  console.log('오늘은 목요일입니다.');
} else if ( today === '금' ) {
  console.log('오늘은 금요일입니다.');
} else if ( today === '토' ) {
  console.log('오늘은 토요일입니다.');
} else {
  console.error('요일이 아닙니다.');
}

var weekday = ['일', '월', '화', '수', '목', '금', '토'];
var today_number = new Date().getDay();
var today = weekday[ today_number ];

switch(today) {
  case '일':
    console.log('오늘은 일요일입니다. 짜파게티 먹는 날~');
  break;
  case '월':
    console.log('오늘은 월요일입니다. 아.. 지긋지긋한 월요병... ㅠㅡㅠ');
  break;
  case '화':
    console.log('오늘은 화요일입니다.');
  break;
  case '수':
    console.log('오늘은 수요일입니다.');
  break;
  case '목':
    console.log('오늘은 목요일입니다.');
  break;
  case '금':
    console.log('오늘은 금요일입니다.');
  break;
  case '토':
    console.log('오늘은 토요일입니다.');
  break;
  default:
    console.error('요일이 아닙니다.');
}


/**
 * --------------------------------
 * 자바스크립트 반복문
 * while문 (if문과 유사, 조건이 참이면 항상 실행!! 주의 요구!! 무한 반복에 빠짐 ㅠㅡㅠ)
 * ----------------------------- */

// if문
// if(조건) {조건이 참이면 실행}

// while문
// while(조건) {조건이 참이면 실행(반복)}

var i = 10;

// if(count > 0) {
//   console.log(count); // 10 출력 후, 종료(1회 실행)
// }

// while(count > 0) {
//   console.log(count); // 10 출력 후, 종료(조건이 항상 참이므로 무한 반복!!!!)
// }

while(count > 0) {
  console.log(count); // 10 출력 후, 종료(조건이 항상 참이므로 무한 반복!!!!)
  // 무한 반복이 되지 않도록 count 조건 변수를 변경시켜줘야 한다.
  // count > 0 이 거짓이 되는 순간이 와야 반복문은 멈춘다.

  // count = count - 1;
  // count -= 1;

  // 후감소
  count--;
  // 선감소
  // --count;

  // count = count + 3;
  // count += 3;
  // count--; (X)
}

// while(count > 0) {
//   console.log(count);
//   count--;
// }

// ↓

// var count = -10;

// do {
//   console.log(count);
//   count--;
// } while(count > 0);


/**
 * --------------------------------
 * for문
 * ----------------------------- */
// var i = 0;
// while(i < 10) {
//   console.log('iteration'); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//   i++; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }

// for ( 변수 선언; 변수 검증; 변수 변경 ) {
// for ( var i = 0; i < 10; i++ ) {
//   console.log('iteration');
// }

// 아래 방법도 가능!
// 변수 선언;
// for ( ; 변수 검증; 변수 변경 ) {
// var i = 0;
// for ( ; i < 10; i++ ) {
//   console.log('iteration:', i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }

// console.log('out of for문의 i', i);


/**
 * --------------------------------
 * for ~ in 문
 *
 * 특정 객체 안에 속성이 존재하는가 확인할 경우 사용
 * ----------------------------- */

var dom_el = document.createElement('div');
var property = 'transition';

// property in dom_el.style; // true

