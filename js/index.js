const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log('scroll!');
  if(window.scrollY > 500){
    //배지 숨기기
    // gsap.to(element,시간,옵션);
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: "none"
    })
  }else{
    // 배지 보이기
    gsap.to(badgeEl,.6,{
      opacity: 1,
      display: "block"
    })
  }
},300));
// _.throttle(함수, milliseconds);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  gsap.to(fadeEl,1,{
    delay: (index + 1) * .7,
    opacity:1
  });
})

//  css 선택자 , option(object)
const verticalSlide = new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

const horizontalSlide = new Swiper('.promotion .swiper-container',{
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여주는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop:true,
  autoplay:{
    delay: 10000
  },
  pagination:{
    el: '.promotion .swiper-pagination', // 페이지번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김처리
    promotionEl.classList.add('hide');
  }else{
    // 보임처리
    promotionEl.classList.remove('hide');
  }
})


function random(min,max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay,size){
  gsap.to(selector,
    random(1.5,2.5),
    //옵션
    {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0,delay)
    }
  );

}

floatingObject('.floating1', 1,15);
floatingObject('.floating2', .5,15);
floatingObject('.floating3', 1.5,20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8, //뷰포트 Y축의 시작점과 끝나는 점을 0~1로 나눔
    })
    .setClassToggle(spyEl, 'show') // Class
    .addTo(new ScrollMagic.Controller()); // 내부 컨트롤러에 할당하여 동작하게 만든다.
});