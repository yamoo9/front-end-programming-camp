/**
 * STEP 1
 * ------------------------------------------
 * 문서(document)에서 대상(element)을 찾는다.
 * .button-toggle을 사용자가 클릭하면
 * 문서에서 .toggled-view-container 요소에 접근해서
 * 화면에서 감춰봅니다. (Hide)
 */

// 수학 문제
// x 값이 8일 때, y 값을 구하시오.
// x = 8
// y = (x * x + 3) / 2

// 변수(Variable) 정의
// var 변수이름 = 값;
// = 기호는 '대입'을 의미하는 연산자
// -----------------------------------
// 변수 이름 작성 규칙
// 이름을 지을 때 하면 안되는 것들
// 1. 이름 앞에 숫자가 먼저 오면 안된다.
// 2. 이름을 지을 때 사이 공백이 오면 안된다.
// 3. 특수 문자는 $, _ 만 사용할 수 있다.
// 4. 이름 작성 시, 모두 대문자로 쓰지 않는다.
// -----------------------------------
var button_toggle = document.querySelector('.button-toggle');
var container = document.querySelector('.toggled-view-container');
var container_state = 'show';
console.log('초기 상태: ', container_state);
// 사용자의 행동(이벤트)을 감지하여 액션을 처리하기 위해
// 이벤트 바인딩(연결)한다.
button_toggle.addEventListener('click', function(){
    // console.log('clicked button_toggle');
    // console.log( container );
    // 우리가 수행할 일은?
    // 문서에서 찾은 container 요소를 화면에서 감춘다.
    // 객체.style.display = 'none';
    container.style.display = 'none';
    // 상태가 변경되었다!
    container_state = 'hide';
    // container 요소가 화면에서 감춰졌다.
    console.log('버튼 클릭 후 변경 상태: ', container_state);
});
