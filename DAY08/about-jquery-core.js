/**
 * --------------------------------
 * jQuery - 존 레식 2005-6 제작
 * ----------------------------- */
// $ 별칭(Alias) 포기
// 다른 라이브러리와의 충돌 방지
// jQuery.noConflict();

// $, jQuery 변수 모두 포기
// 반환 객체는 jQuery 객체로 변수에 참조 시, jQuery를 사용할 수 있다.
// var yamoo9 = jQuery.noConflict(true);

// noConflict() 결과 검증
// console.log($ === jQuery); // false
// console.log('jQuery:', typeof jQuery);

// yamoo9('body').append('<p>this is jQuery!</p>');

/**
 * --------------------------------
 * jQuery .ready()
 */
function init() {
  var h1 = $('h1');
  // console.log(h1.length); // $()
  h1.text('jQuery Loaded.');
}

// DOM이 준비되면, 함수 init을 실행
// $(document).ready(init);
$(function() {
  // ready()의 단축 사용법
});

$(init); // 이미지와 상관없이 문서(HTML 해석)가 준비되면 실행이기에 빠르다.
// $(window).load(init); // 이미지를 모두 로드한 다음 실행하기에 느리다.

// ready()에 연결된 Handler를 지연(붙잡음)
$.holdReady(true);

// 시간을 제어하는 네이티브 함수
window.setTimeout(function() {
  // ready()에 연결된 Handler를 실행(놓아줌)
  // $.holdReady(false);
}, 3000);

// jQuery 비동기 통신(Ajax)
// 외부의 스크립트를 비동기적으로 로드
// $.getScript('스크립트가 있는 주소'[, 로드가 완료되면 실행되는 함수])
$.getScript('../Resources/jquery-ui-1.11.4.min.js', function(data, status, jqXHR) {
  console.log('jQuery UI 로드가 완료되었습니다.');
  $.holdReady(false);
  console.log(status, jqXHR);
});