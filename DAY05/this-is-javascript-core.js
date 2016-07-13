/*! this-is-javascript-core.js © yamoo9.net, 2016 */

// 오늘은 자바스크립트를 정리
// HTML, CSS와 함께 사용되는 프론트엔드 개발 언어
// Node.js -> 웹 서버에서 사용되는 자바스크립트 환경
// 어쨌든 문법은 하나!!!

// ---------------------------------------------------------
// 자바스크립트
// 코어 문법

// var 변수(variable)란? 메모리 상의 공간을 확보한 장소의 이름을 말한다.
// JavaScript 값(데이터) 유형

// JavaScript의 6가지 데이터 유형을 확인하라.
// 데이터 유형을 확인하는 방법 typeof
// 1. Number
// 2. String
// 3. Boolean
// 4. Function
// 5. Array
// 6. Object

// 6가지 유형
// 1. 객체 숫자 10 (정수, 소수, 실수)
// 2. 객체 문자 "message" ('', "")
// 3. 객체 불리언 true, false
// 4. 객체 함수 function(){}
// 5. 객체 배열 []
// 6. 객체 {}

// 데이터 유형을 확인 typeof 키워드를 사용한다.

// typeof 사용에 있어 주의점!!!
// Array(배열)을 배열 유형이라고 이야기 하지 않고, 객체 유형이라고 이야기 한다.
// 어떻게 해야? 배열이 배열인줄 알 수 있을까?
// instanceof 키워드를 사용하면 배열을 확인할 수 있다.

// 남과 여 객체 생성

// 남 캐릭터
// 이름: 베인스
// 성별: 남자
// 나이: 34
// 직업: 프로그래머
// 취미: 낚시

var man = {
  "name": "Bains",
  "gender": "male",
  "age": 34,
  "job": "Programmer",
  "hobby": "Fishing"
};

// 여 캐릭터
// 이름: 루시아
// 성별: 여자
// 나이: 27
// 직업: 인터랙티브 아티스트
// 취미: 보드게임
var woman = {
  "name": "Rucia",
  "gender": "female",
  "age": 27,
  "job": "Interactive Artist",
  "hobby": "Board Game"
};

// 조건) 베인스의 나이는 루시아 나이보다 많아?
if (man.age > woman.age) {
  // 조건이 참인 경우 ) 많다면
  console.log('he say 오빠라고 불러');
}
else {
  // 조건이 거짓인 경우 ) 적다면
  console.log('he say 너라고 부를께');
}


var my_score = 92;

// 조건이 많은 경우에는 if ~ else if ~ else 사용
if ( my_score < 60 ) {
    console.log('에라이!!! 나가 죽어');
} else if ( my_score < 70 ) {
    console.log('분발해!!! 하지만 나가 죽어');
} else if ( my_score < 80 ) {
    console.log('잘했어!!! 하지만 나가 죽어');
} else if ( my_score < 90 ) {
    console.log('괜찮아! 좀 더 노력하자');
} else {
    console.log('와우!!! 어메이징!!!');
}


// 3항식
// 조건 ? 참 : 거짓
// 조건 1 ? 참 : 조건 2 ? 참 : 거짓
// 조건 1 ? 참 : 조건 2 ? 조건 3 ? 참 : 거짓


