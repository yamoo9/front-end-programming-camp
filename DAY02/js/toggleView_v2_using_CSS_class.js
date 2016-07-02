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

button_toggle.addEventListener('click', function(){
    if ( container_state === 'show' ) {
      // container.style.display = 'none';
      container.classList.add('screen-hide');
      container_state = 'hide';
    } else {
      // container.style.display = 'block';
      container.classList.remove('screen-hide');
      container_state = 'show';
    }
});
