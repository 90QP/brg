// 메뉴 hover
const elLis = document.querySelectorAll('.header_nav > nav > ul > li')
const elBar = document.querySelector('.bar')

elLis.forEach(function(menu){
  menu.onmouseover = function(){
    elBar.style=`
      width:${this.offsetWidth}px;
      left:${this.offsetLeft}px;
    `
  }

  menu.onmouseleave = function(){
    elBar.style=`
      width:0px;
      left:${this.offsetLeft}px;
    `
  }
})


// top 버튼
const subTop = document.querySelector('.sub_float_top')

let pos = { y:0, }
function scrollstate(){
  pos.y = window.scrollY;
}

function scrollfunc(){
  if(! pos.y == 0 ){
    subTop.classList.add('top_no')
  } else {
    subTop.classList.remove('top_no')
  }
}

window.addEventListener('scroll',function(){
  scrollstate();
  scrollfunc();
})

subTop.addEventListener('click', function(e){
  e.preventDefault()
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

// language 아이콘
const lan_sub = document.querySelector('.lang_sub')
const lan_menu = document.querySelector('.lang_menu')

lan_menu.addEventListener('click', function(){
  lan_sub.classList.add('lang_on')
})

lan_sub.addEventListener('mouseleave', function(){
  lan_sub.classList.remove('lang_on')
}) // mouseleave와 mouseout은 자식을 인식하느냐 아니냐의 차이가 있음.



//검색창
const elSearch = document.querySelector('.search_wrap')
const elSearchClose = document.querySelector('.search_close')
const elSearchBtn = document.querySelector('.sear_menu')
const elSearchForm = document.querySelector('.search_find')

elSearchBtn.addEventListener('click',function(){
  elSearch.classList.add('search_on');
  elSearchForm.focus();
})

elSearchClose.addEventListener('click',function(){
  elSearch.classList.remove('search_on');
})


//의견 창 클릭시 text칸 clear
const elFText = document.querySelector('#sns_footer_text')

elFText.addEventListener('focus',function(){
  this.value='';
})

