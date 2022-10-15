let money=document.querySelector('.money');
let moneycontent=document.querySelector('.money-dp-content')
let lang=document.querySelector('.lang')
let langcontent=document.querySelector('.lang-dp-content')

let catdpcontent=document.querySelector('.cat-dpcontent')
let category=document.querySelector('.category')

money.onclick=function(){
    if(langcontent.classList.contains('active')){
        langcontent.classList.remove('active')
    }
  moneycontent.classList.toggle('active')
}


lang.onclick=function(){
    if(moneycontent.classList.contains('active')){
        moneycontent.classList.remove('active')
    }
    langcontent.classList.toggle('active')
  }


  category.onclick=function(){
    catdpcontent.classList.toggle('active')
  }




function plus() {
    let plusic = document.querySelector('.number-product').value
    let a = parseInt(plusic)
    a++;
    document.querySelector('.number-product').value = a
}

function minus() {
    let plusic = document.querySelector('.number-product').value
    let a = parseInt(plusic)
    if(a<=0){
        a=0
        document.querySelector('.number-product').value = a
    }
    else{
        a--;
        document.querySelector('.number-product').value = a
    }
}


let profile=document.querySelector('.profileicon')
let prdp=document.querySelector('.prdp-content')

profile.onclick=function(){

    prdp.classList.toggle('practive')
 
}

$('.flashsale').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:'<i class="fa-solid fa-arrow-left-long"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
