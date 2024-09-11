function copyMenu(){
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.department');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;

}
copyMenu();

const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');
      menuButton.addEventListener('click',function(){
        addClass.classList.toggle('show-menu')
      })
      closeButton.addEventListener('click',function(){
        addClass.classList.remove('show-menu')
      })

const subMenu = document.querySelectorAll('.has-child .icon-small');
subMenu.forEach((menu) => menu.addEventListener('click',toggle));

function toggle(e){
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand'):null)
    if(this.closest('.has-child').classList != 'expand')
        this.closest('.has-child').classList.toggle('expand')
}

const searchBar = document.querySelector('.t-search'),
    searchClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
    searchBar.addEventListener('click',function(){
        showClass.classList.toggle('showsearch')
    })
    searchClose.addEventListener('click',function(){
        showClass.classList.remove('showsearch')
    })


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
      });


      /* page - home */

      const pageButton = document.querySelector('.dpt-cat .dpt-trigger'),
            pageClass = document.querySelector('.site');
 pageButton.addEventListener('click' , () => {
              pageClass.classList.toggle('showPage')
            });

            
/* page - slider */ 

var productThumb = new Swiper ('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
});
var productBig = new Swiper ('.big-image', {
  loop: true,
   autoHeight: true,
   navigation : {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
   thumbs: {
    swiper: productThumb,
   }

})

// stock product var width percentage 

var stocks = document.querySelectorAll('.products .stock');
for (let x=0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold*100/stock;

  stocks[x].querySelector('.available').style.width =percent+ '%';
}

const FtoShow = '.filter';
const Fpopup = document.querySelector(FtoShow);
const FShow = document.querySelector('.filter-trigger');
 FShow.addEventListener('click',()=>{
  setTimeout(()=>{
    if(!Fpopup.classList.contains('show')){
      Fpopup.classList.add('show')
    }
  }, 250 )
 });

 document.addEventListener('click',(e)=>{
  const isPopup = e.target.closest(FtoShow);
  if(!isPopup && Fpopup.classList.contains('show')){
    Fpopup.classList.remove('show')
  }
 })

 // show cart menu button 

 const divToshow = '.mini-cart';
 const divPopup = document.querySelector(divToshow);
 const cartTrigger = document.querySelector('.cart-trigger');

cartTrigger.addEventListener('click',()=>{
  setTimeout(()=>{
    if(!divPopup.classList.contains('show')){
      divPopup.classList.add('show')
    }
   },250)
});

document.addEventListener('click',(e)=>{
  const isDivpop = e.target.closest(divToshow);
  if(!isDivpop && divPopup.classList.contains('show')){
    divPopup.classList.remove('show')
  }
})


// show modal function 



