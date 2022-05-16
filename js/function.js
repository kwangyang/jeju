$(document).ready(function(){

  const $mnu = $('header > nav > .gnb > li > a');

  const arrTopVal = [];
  let nowIdx = null;


  for(let i=0;i<$mnu.length;i++){
    arrTopVal[i] = $('article').eq(i).offset().top;
  }

  //네비게이션 메뉴에 대한 클릭이벤트 구문
  $mnu.on('click', function(evt){
    evt.preventDefault();

    nowIdx = $mnu.index(this);

    $('html,body').stop().animate({
      scrollTop : arrTopVal[nowIdx]-50
    },400)
  });


  //브라우저의 scroll 이벤트 구문
  $(window).on('scroll',function(){    
    const scrollTop = $(this).scrollTop();



    for(let i=0;i<arrTopVal.length;i++){
      if(scrollTop>=arrTopVal[i]-50){


        $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');

      } else if(scrollTop<arrTopVal[0]-50){
        $mnu.parent().removeClass('on');
      }
    }

    const view = (scrollTop + $(this).height()) - $('footer').offset().top

    if(view>0){
      $('aside').css({marginBottom:view});
    }else{
      $('aside').css({marginBottom:0});
    }

  });


  //.logo>a, aside>a 클릭시 맨위로 이동
  $('.logo>a, aside>a').on('click', function(evt){
    evt.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    })
  });

  // 처음 접속시 load 이벤트 구문
  // $(window).on('load', function(){
  //   $('html,body').stop().animate({
  //     scrollTop:0
  //   });
  // });
  

  // test

  $(window).on('load', function(){
    $('html,body').stop().animate({
      scrollTop:0
    });

  


  });


  // ------------------------------------------------------------
  
  // visual
   
    const $indicators = document.querySelectorAll('.visual > .slides-pagination > li > a');
    const $container = document.querySelector('.visual > .slides-container');
  
    let slideIdx = 0;
    let oldIdx = slideIdx;
  
    $indicators.forEach(function($indicator,idx){
      $indicator.addEventListener('click', function(evt){
        evt.preventDefault();
  
        oldIdx = slideIdx;
        slideIdx = idx;

        // console.log('slideIdx=',slideIdx);
  
        const $parent = this.parentElement;
        $parent.classList.add('on');

        $indicators[oldIdx].parentElement.classList.remove('on');
        $container.style.left = -(100*slideIdx)+'%';
      });
    });
  

    // ----------------------------------------------------------------------------
    
    // east section

const $eastindicators = document.querySelectorAll('#east > .content > .content-pagination > li > a');
const $eastcontainer = document.querySelector('#east >.content > .content-container ');

let eastnowIdx = 0;//현재 보여지고 있는 슬라이드의 인덱스번호
let eastoldIdx = eastnowIdx;//직전에 보여졌던 슬라이드의 인덱스번호

//7개의 indicator에 대한 클릭 이벤트 구문
$eastindicators.forEach(function($eastindicator,idx){
  $eastindicator.addEventListener('click', function(evt){
    evt.preventDefault();

    eastoldIdx = eastnowIdx;
    eastnowIdx = idx;
    console.log('eastnowIdx=',eastnowIdx);

    const $parent = this.parentElement;//이번에 클릭한 요소의 부모
    $parent.classList.add('on');

    //이전 $indicator에 붙어있던 on 제거
    $eastindicators[eastoldIdx].parentElement.classList.remove('on');

    //컨테이너 이동
    $eastcontainer.style.left = -(100*eastnowIdx)+'%';
  });
});

// south section

const $southindicators = document.querySelectorAll('#south> .content > .content-pagination > li > a');
const $southcontainer = document.querySelector('#south> .content > .content-container ');

let southnowIdx = 0;
let southoldIdx = southnowIdx;

//5개의 indicator에 대한 클릭 이벤트 구문
$southindicators.forEach(function($southindicator,idx){
  $southindicator.addEventListener('click', function(evt){
    evt.preventDefault();

    southoldIdx = southnowIdx;
    southnowIdx = idx;
    console.log('southnowIdx=',southnowIdx);

    const $parent = this.parentElement;
    $parent.classList.add('on');

    $southindicators[southoldIdx].parentElement.classList.remove('on');
    $southcontainer.style.left = -(100*southnowIdx)+'%';
  });
});


// west section

const $westindicators = document.querySelectorAll('#west> .content > .content-pagination > li > a');
const $westcontainer = document.querySelector('#west> .content > .content-container ');

let westnowIdx = 0;
let westoldIdx = westnowIdx;

//5개의 indicator에 대한 클릭 이벤트 구문
$westindicators.forEach(function($westindicator,idx){
  $westindicator.addEventListener('click', function(evt){
    evt.preventDefault();

    westoldIdx = westnowIdx;
    westnowIdx = idx;
    console.log('westnowIdx=',westnowIdx);

    const $parent = this.parentElement;
    $parent.classList.add('on');

    $westindicators[westoldIdx].parentElement.classList.remove('on');
    $westcontainer.style.left = -(100*westnowIdx)+'%';
  });
});

// north section

const $northindicators = document.querySelectorAll('#north > .content > .content-pagination > li > a');
const $northcontainer = document.querySelector('#north > .content > .content-container ');

let northnowIdx = 0;
let northoldIdx = northnowIdx;

//5개의 indicator에 대한 클릭 이벤트 구문
$northindicators.forEach(function($northindicator,idx){
  $northindicator.addEventListener('click', function(evt){
    evt.preventDefault();

    northoldIdx = northnowIdx;
    northnowIdx = idx;
    console.log('northnowIdx=',northnowIdx);

    const $parent = this.parentElement;
    $parent.classList.add('on');

    $northindicators[northoldIdx].parentElement.classList.remove('on');
    $northcontainer.style.left = -(100*northnowIdx)+'%';
  });
});

	});



