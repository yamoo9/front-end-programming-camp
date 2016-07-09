/**
 *
 * 돔스크립트란?
 * --------------------------------------
 * 자바스크립트를 이용하여 문서객체모델에 조작을 하는 것
 * 문서 객체(Document ElementNode)
 * 접근, 탐색, 생성, 복제, 제거, 이동
 */

// 참조 일반 변수 정의
var page;
var page_row_first_child;
var page_row_last_child;
var row;

// var 키워드를 한 번만 사용하는 패턴
// var singleton pattern

// 유형 1. 변수 정의만 하는 것.
// var page, page_row_first_child;

// 유형 2. 변수 정의와 동시에 값을 할당하는 것.
// var page = document.querySelector('#page'),
//     page_row_first_child = page.firstChild,
//     page_last_child = page.lastChild;

// 1 [접근] 문서에서 id 속성 값이 'page'인 요소노드를 찾아라.
// 기존에 사용된 방법 (Legacy)
// .getElementById()
// page = document.getElementById('page');
// 새롭게 사용되는 방법
// .querySelector()
page = document.querySelector('#page');
row = page.querySelector('.row');


// 2 [탐색] 접근한 요소노드 #page에서
// 첫번째 자식노드(First Child)를 찾아라.
// page_row_first_child = row.firstChild;
// 첫번째 자식 요소노드(First Element Child)를 찾아라. IE 9+
page_row_first_child = row.firstElementChild;
// 마지막 자식노드(Last Child)를 찾아라.
// page_row_last_child = row.lastChild;
// 마지막 자식 요소노드(Last Element Child)를 찾아라.
page_row_last_child = row.lastElementChild;

// 콘솔 검증
// console.log('page_row_first_child:', page_row_first_child);
// console.log('page_row_last_child:', page_row_last_child);


// ---------------------------------------------------------
// 노드(Node)란?
// ---------------------------------------------------------
// 문서를 구성하는 원소 단위.
// <div>                ElementNode
// <div id="attribute"> AttributeNode
// <div>hi, there</div> TextNode
// <!-- comment -->     CommentNode
// <!Doctype html>      DoctypeNode



// ---------------------------------------------------------
// 문서 객체 모델(객체 사이의 관계, 부모/자식/형제) 탐색(DOM Traversal)
// ---------------------------------------------------------
// <html> 루트 요소를 찾은 후
var html = document.documentElement;
// 첫번째 자식 요소노드를 찾아라
var html_in_firstElChild = html.firstElementChild;
// 그리고 다음에 위치한 형제 요소노드를 찾아라
// var next_Elsibling = html_in_firstElChild.nextSibling;
var next_Elsibling = html_in_firstElChild.nextElementSibling;
// 그리고나서 부모요소노드에 접근한 결과(부모요소노드)를 콘솔에 출력하라.
var parent_ElNode = next_Elsibling.parentNode;

// console.log('html:', html);
// console.log('html_in_firstElChild:', html_in_firstElChild);
// console.log('next_Elsibling:', next_Elsibling);
// console.log('parent_ElNode:', parent_ElNode);

// --------------------------------------------------
// .col-3:nth-child(2) 요소노드를 찾아라.
// --------------------------------------------------

// 방법 1. CSS 선택자로 엄청 쉽게 찾자.
var target_el = document.querySelector('#page .col-3:nth-child(2)');

// 방법 2. JS의 DOM 탐색 방법으로 어렵게 찾아 보자.
// <html> 부터 시작
var body = html.lastElementChild;

var page_child = body.firstElementChild;

var row_in_page = page_child.firstElementChild;

var row_2nd_child = row_in_page.firstElementChild.nextElementSibling;

// console.log('row_2nd_child: ', row_2nd_child);

// <div>this is division.</div>
// 위 코드에서 this is division은 텍스트 노드이다.
// 요소노드 div에서 텍스트노드에 접근하기 위해서는
// 첫번째 자식노드에 접근하는 .firstChild를 사용해야 한다.
// 이 때 접근한 텍스트노드의 노드 유형(nodeType)은 3을 반환한다.
// 반면 요소노드의 유형(nodetype)은 1이다.
// 텍스트노드의 값에 접근하려면 노드 값(nodeValue)를 사용한다.

// --------------------------------------------------
// 노드 유형
// --------------------------------------------------
// https://developer.mozilla.org/ko/docs/Web/API/Node/nodeType
// ElementNode.nodeType   // 1
// AttributeNode.nodeType // 2
// TextNode.nodeType      // 3
// CommentNode.nodeType   // 8


// --------------------------------------------------
// 노드 생성(Create)
// --------------------------------------------------

// 문서에 요소를 생성한다.
// 그래서? 어떤 요소를 생성할꺼야?
// <div> 요소를 생성하고 싶어
// 그래 알겠어

var my_div = document.createElement('div'); // <div></div>

// console.log(my_div);


// 다음 마크업을 자바스크립트로 동적 생성 구현해보자.
// <nav id="page-gnb">
//   <ul class="reset-list clearfix">
//     <li class="float-left"><a href="">Home</a></li>
//     <li class="float-left"><a href="">About</a></li>
//     <li class="float-left"><a href="">Works</a></li>
//     <li class="float-left"><a href="">Contect</a></li>
//     <li class="float-left"><a href="">Favorites</a></li>
//   </ul>
// </nav>

// ----------------------------------------------------
// STEP 1. <nav> 요소를 생성한다.
var gnb = document.createElement('nav');

// ----------------------------------------------------
// STEP 2. 생성한 gnb 요소에 id 속성으로 값을 'page-gnb'라고 설정한다.

// 오래 전 방식
// gnb.id = 'page-gnb';
// gnb.data-cutom-id = 'yamoo9'; // 새롭게 등장한 속성은 X

// 새로운 방식(권장)
gnb.setAttribute('id', 'page-gnb');
// gnb.setAttribute('data-cutom-id', 'yamoo9');


// ----------------------------------------------------
// STEP 3. <ul> 요소를 생성한다.
var gnb_ul = document.createElement('ul');
gnb_ul.setAttribute('class', 'reset-list clearfix');
// gnb_ul.setAttribute('class', 'clearfix');

// ----------------------------------------------------
// STEP 4. <ul> 요소를 <nav id="page-gnb">의 자식 요소로 추가(삽입)한다.
// 부모노드.appendChild(자식노드) // 마지막 자식으로 추가(삽입)
gnb.appendChild(gnb_ul);

// ----------------------------------------------------
// STEP 5. <li> 요소를 x5 생성한다.

// ----------------------------------------------------
// 내비게이션 텍스트 아이템을 배열 데이터에 추가해본다.
var gnb_text_items = [
  'Home',
  'About',
  'Works',
  'Contect',
  'Favorites'
];

// var gnb_li_1st = document.createElement('li');
// gnb_li_1st.setAttribute('class', 'float-left');
// gnb_ul.appendChild(gnb_li_1st);

// ----------------------------------------------------
// STEP 6. <a> 요소를 생성한다.
// var gnb_li_1st_a = document.createElement('a');
// // class 속성 설정
// gnb_li_1st_a.setAttribute('href', '');
// // 텍스트 노드 생성 'Home'
// var gnb_li_1st_a_text = document.createTextNode('Home');
// gnb_li_1st_a.appendChild(gnb_li_1st_a_text);

// gnb_li_1st.appendChild(gnb_li_1st_a);


// ----------------------------------------------------
// 자바스크립트 반복문을 활용했다.
// gnb_text_items.length 개수 만큼 반복하여 요소를 생성한다.
for ( var i = 0; i < gnb_text_items.length; i++ ) {
  var text = gnb_text_items[i];
  // 문자열 접합(용접)
  // console.log('<a>' + text + '</a>');
  // --------------------------------------------------------
  // <li> 생성
  var li = document.createElement('li');
  // <li class="float-left">
  li.setAttribute('class', 'float-left');
  // --------------------------------------------------------
  // <a> 생성
  var link = document.createElement('a');
  // <a href="">
  link.setAttribute('href', '');
  // 'Home'
  var link_text = document.createTextNode(text);
  // <a href="">Home</a>
  link.appendChild(link_text);
  // --------------------------------------------------------
  // <li><a href="">Home</a></li>
  li.appendChild(link);
  // <ul><li><a href="">Home</a></li></ul>
  gnb_ul.appendChild(li);
}

// ----------------------------------------------------
// 최종 생성 결과를 출력한다.
// console.log(gnb.outerHTML);

// ---
// 생성된 gnb 요소(<nav>)를 문서의 #gnb-position 내부 마지막 요소로 붙인다.
var gnb_position = document.querySelector('#gnb-position');
gnb_position.appendChild(gnb);



// ----------------------------------------------------
// 자바스크립트 코어 세계
// [ 데이터 유형 ]
// 1. 숫자 유형 ex) 10, 0.8934, 1.1592, -0.43
// 2. 문자 유형
// 3. 불리언 유형
// 4. 함수 유형
// 5. 배열 유형
// 6. 객체 유형
// 객체가 아닌 것들

// [ 데이터 유형 체크 ]
// typeof 데이터 ----> 어떤 유형인지
// 1. 'number'
// 2. 'string'
// 3. 'boolean'
// 4. 'function'
// 5. 'object' ※ typeof는 설계가 잘못되었다!!!!!!!!!!!
// 6. 'object'
// ----------------------------------------------------

// 자바스크립트의 데이터 유형 6가지

// -------------------------------
// 원시 데이터 유형 3가지
// -------------------------------
// 1번째 "숫자"
var num = 2016;
// console.log(typeof num);
// 2번째 "문자"
var str = "2016";
// console.log(typeof str);
// 3번째 "불리언"
var boo = !num; // true 또는 false
// console.log(typeof boo);

// -------------------------------
// 복잡한 데이터 유형 3가지
// -------------------------------
// 4번째 "함수"
var fnc = function() {};
// console.log(typeof fnc);
// 5번째 "배열"
// [ 컵, 리모콘, 음료수, 충전기, 노트북 ]
var arr = [];
// console.log(typeof arr); // 'array' ??
// ※ typeof는 치명적인 설계 오류를 가지고 있다!!!
// 사용에 주의가 요구된다. 어떻게 해야? Array를
// 올바르게 확인할 수 있을까?
// console.log( arr instanceof Array );
// 6번째 "객체"
var obj = {};
// console.log(typeof obj);

// 생성된 배열 원소의 개수는?
// console.log(gnb_text_items.length); // 5

// 자바스크립트의 반복문
// ~ 동안(while)
// while문

// 디버깅 용도
// 사실 잘 사용하지 않는다.
// debugger;

var state = true;
var limit_count = 3;

while(state) {
  // 처리되는 구문(반복)
  // console.log('나는 항상 관대하다');
  // limit_count = limit_count - 1; // 2
  // limit_count -= 1;
  limit_count--;
  // 조건 문 수행
  if (limit_count <= 0) {
    state = false;
  }
}

// ------------------------------------
// while문 -> for문 변경
// ------------------------------------

// for문의 기본 골격
// for( 변수 선언; 변수 조건 확인; 변수 값 변경 ) {
// for ( var i = 0; i < 10; i = i + 2 ) {
    // console.log( i );
// }


// 위에서 다룬 while 문을 for 문으로 변경
var state = true;
// var limit_count = 3;

for( var limit_count = 3; limit_count > 0; limit_count -= 1 ) {
  // 처리되는 구문(반복)
  // console.log('나는 항상 관대하다');
}

// ------------------------------------------------
// gnb_text_items 변수는 위에서 이미 정의되어 있다.
// var gnb_text_items = [
//   'Home',
//   'About',
//   'Works',
//   'Contect',
//   'Favorites'
// ];

// 역방향
for( var i = gnb_text_items.length - 1; i >= 0 ; i-- ) {
    // console.log(gnb_text_items[i] , i);
}

// 정방향
for( var a = 0; a < gnb_text_items.length; a++ ) {
    // console.log(gnb_text_items[a] , a);
}

// for문이 완료된 이후에 조건 변수는 마지막 값이 살아있고
// 최종적으로 변경이 수행된 값이 된다.
// console.log(a); // a === 5