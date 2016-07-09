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
// 첫번째 자식 요소노드를 찾아라
// 그리고 다음에 위치한 형제 요소노드를 찾아라
// 그리고나서 부모요소노드에 접근한 결과(부모요소노드)를 콘솔에 출력하라.
