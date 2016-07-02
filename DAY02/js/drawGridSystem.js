/*! drawGridSystem.js © yamoo9.net, 2016 */

// 문서에서 토글 그리드를 수행할 버튼을 찾아라.
var toggle_btn = document.querySelector('.button-toggle-grid');
// 문서에서 .container 요소를 찾아라.
var grid_container = document.querySelector('.container');
// grid_container 요소의 그리드 보임/숨김 초기 상태 변수 설정
var grid_container_state = 'hide';

// console.log(toggle_btn, grid_container);
// 찾은 버튼을 사용자가 클릭하면 액션을 수행한다
// 이벤트 연결
toggle_btn.addEventListener('click', function() {
  // 조건 1. 화면에 그리드가 숨겨진 상태일 경우
  if ( grid_container_state === 'hide' ) {
    // console.log('click');
    // 컨테이너 요소에 .show-grid 클래스 속성을 추가한다.
    grid_container.classList.add('show-grid');
    grid_container_state = 'show';
    // 버튼의 텍스트 변경
    toggle_btn.innerText = 'show grid';
  }
  // 조건 2. 화면에 그리드가 보여진 상태일 경우
  else {
    grid_container.classList.remove('show-grid');
    grid_container_state = 'hide';
    toggle_btn.innerText = 'hide grid';
  }

});