/*! ui-accordian.js © yamoo9.net, 2016 */

// 아코디언 UI 컴포넌트를 찾아라
var $accordian = $('.ui-accordian');

// 아코디언 UI 버튼을 찾아라
// var $acc_buttons = $('.ui-accordian-tab', $accordian);
var $acc_buttons = $accordian.find('.ui-accordian-tab');

// 아코디언 UI 버튼에 click 이벤트를 연결
$acc_buttons.click(function() {
  // this 키워드는 클릭한 각각의 버튼을 참조
  // console.log(this);
  // Native JavaScript 방식
  // var parent = this.parentNode;
  // console.log(parent);

  // jQuery 방식
  var $parent = $(this).parent();
  // console.log($parent);

  // 나의 부모님의 형제 분들에게서 활성화 클래스를 제거한다.
  $parent.siblings('.active-accordian').removeClass('active-accordian');
  // 나의 부모에게는 활성화 클래스 속성을 추가한다.
  // $parent.toggleClass('active-accordian');
  if ( !$parent.hasClass('active-accordian') ) {
    $parent.addClass('active-accordian');
    // $(this).next().slideDown();
  } else {
    $parent.removeClass('active-accordian');
    // $(this).next().slideUp();
  }
});