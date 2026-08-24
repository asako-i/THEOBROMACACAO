
$(function () {
  $(window).on('scroll load', function () {
    $('.fade-up').each(function () {
      let target = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 100) {
        $(this).addClass('show');
      }
    });
  });
});

// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


$('.slider').slick({
	// autoplay: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// １枚ずつふわふわ切り替わる 上の２つの値を１にしておく
	// fade:true,
	autoplay: true,
	// 動く時間
	speed: 4000,
	// 止まってる時間 ０にすると永遠に動く
	// autoplaySpeed: 0,
	// arrows:false,矢印なし
	dots: true,
	// ドットを出して押せるように
	// centerMode: true,
	// cssEase: 'linear'
});


// $('.slider').slick({
//   infinite: true,
//   slidesToShow: 1,
//   adaptiveHeight: true,
// 	fade: true,
// 	autoplay: true,
// 	// 動く時間
// 	speed: 2000,
// 	// 止まってる時間 ０にすると永遠に動く
// 	autoplaySpeed: 0,
// 	// arrows:false,矢印なし
// 	dots: true,
// 	// ドットを出して押せるように
// 	centerMode: true,

// });







// // 画面の読み込みが終わったら実行してね
// window.addEventListener('load', function () {
// 	// 素材置き場
// 	var $button = document.querySelector('.toggle-menu-button');
// 	var $menu = document.querySelector('.header-site-menu');

// 	// ボタンをクリックした時
// 	$button.addEventListener('click', function () {

// 		// もし、メニューがクラスis-showを持ってたら
// 		if ($menu.classList.contains('is-show')) {
// 			// メニューのクラスis-showを消して
// 			$menu.classList.remove('is-show');
// 			// ボタンのクラスis-showを消して
// 			$button.classList.remove('is-show');
// 		}
// 		// そうじゃなかったら　// もし、メニューがクラスis-showをもってなかったら
// 		else {
// 			// メニューのクラスis-showを追加して
// 			$menu.classList.add('is-show');
// 			// ボタンのクラスis-showを追加
// 			$button.classList.add('is-show');
// 		}
// 	});
// });
// $(function(){
// 	$(".toggle-menu-button").click(function(){
// 		$(".header-site-menu").toggleClass("is-show");
// 		$(".toggle-menu-button").toggleClass("is-show");
		//上２行を１行で
		//  $(".header-site-menu,.toggle-menu-button").toggleClass("is-show");

// 	});
// });