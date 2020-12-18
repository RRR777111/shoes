'use strict';
{
  //リサイズheader
  const mvHeight = document.getElementById('mv').clientHeight;
  const header = document.getElementById('header');

  window.addEventListener('scroll', function(){
    let ST = window.pageYOffset;
    if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
      if(ST > mvHeight){
        header.classList.add('resize');
      } else {
        header.classList.remove('resize');
      }
    }
    });
  //スムーススクロール
  const gnavLink = document.querySelectorAll('.gnav__link');
  const arryGnav = Array.from(gnavLink);
  
  arryGnav.forEach(menu => {
    menu.addEventListener('click', function(e){
      e.preventDefault();
      let attr = menu.getAttribute('href');
      let targetPos = document.getElementById(attr.replace('#', ''));
      let ST = window.pageYOffset;
      const targetRect = targetPos.getBoundingClientRect().top;
      const target = targetRect + ST;
      window.scroll({
        top: target,
        behavior: 'smooth'
      });
    });
  });

  //fadein
  const elms = document.querySelectorAll('.elms');
  window.addEventListener('scroll', function(){
    let ST = window.pageYOffset;
    elms.forEach(function(elm){
      const gap = -500;
      let pos = elm.getBoundingClientRect().top + ST + gap;
      if(ST > pos){
        elm.classList.add('fadeIn');
      }
    });
  });
}