let btns=document.querySelectorAll('.action .btn a')

if(localStorage.getItem('basket')===null){
  localStorage.setItem('basket',JSON.stringify([]))
}
btns.forEach(btn => {
  btn.onclick=function(e){
    e.preventDefault()
    let prId=e.target.parentElement.parentElement.parentElement.id;
    let prName=e.target.parentElement.parentElement.previousElementSibling.children[0].innerHTML
    let prPrice=e.target.parentElement.parentElement.previousElementSibling.children[1].innerHTML
    let prImage=e.target.parentElement.parentElement.parentElement.children[0].children[0].src

    console.log(prPrice);

    let basket=JSON.parse(localStorage.getItem('basket'));
    let existProd = basket.find(pr => pr.Id === prId);
  

    if(existProd == undefined){
        basket.push({
            Id: prId,
            Name: prName,
            Price: prPrice,
            Image: prImage,
            Count: 1
        })
    }
    else{
        existProd.Count +=1 
    }

    localStorage.setItem('basket',JSON.stringify(basket))


  
    CountProduct();
  }
  
});



function CountProduct(){
  let basket=JSON.parse(localStorage.getItem('basket'));

  document.querySelector('.cart .count').innerHTML=basket.length
}

CountProduct()





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


  $('.bycat').slick({
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
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
          slidesToShow: 4,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.bestsell').slick({
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

  $('.expslide').slick({
    rows:2,
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
          slidesPerRow: 2,
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

  $('.feedbckslider').slick({
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    prevArrow:'<i class="fa-solid fa-arrow-left-long"></i>',
    nextArrow:'<i class="fa-solid fa-arrow-right-long"></i>',
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.arrslider').slick({
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
////countdowntimer

  var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  
  if(days<10){
    document.getElementById("day").innerHTML='0'+days
      
    }
    else{
  
      document.getElementById("day").innerHTML=days
    }
  if(hours<10){
    document.getElementById("hour").innerHTML='0'+hours
      
    }
    else{
  
      document.getElementById("hour").innerHTML=hours

    }
  if(minutes<10){
    document.getElementById("min").innerHTML='0'+minutes
      
    }
    else{
  
      document.getElementById("min").innerHTML=minutes

    }
  if(seconds<10){
  document.getElementById("sec").innerHTML='0'+seconds
    
  }else{

    document.getElementById("sec").innerHTML=seconds
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




/////  dots

let dots=document.querySelectorAll('.dots .dotcolor')

dots.forEach(dt =>{
dt.onclick=function(){
  let alldot=dt.parentElement.children
  for (let ad of alldot) {
    if(ad.classList.contains('border')){
      ad.classList.remove('border')
    }
  }
  dt.classList.add('border')
}
 
})

AOS.init();



//////mainslider


let img=document.querySelector('.mainslider .image')
let text=document.querySelector('.mainslider .text')
setTimeout(() => {
    let newimg=document.createElement('img')
    newimg.src='assets/Images/slider-1.png'
    img.appendChild(newimg)
    newimg.setAttribute('data-aos','fade-left')

  let icon=document.createElement('i')
  icon.setAttribute('class','fa-solid fa-mobile-screen')
  text.appendChild(icon)
  icon.setAttribute('data-aos','fade-up')


  let span=document.createElement('p')
  span.setAttribute('class','parag')
  span.setAttribute('data-aos','fade-up')
  span.setAttribute('data-aos-duration','1000')
  span.innerHTML='SmartPhone'
  text.appendChild(span)
  

  let h2=document.createElement('h2')
  h2.setAttribute('data-aos','fade-up')
  h2.innerHTML='Up to 60% off Voucher'
  text.appendChild(h2)


}, 2000);


setTimeout(() => {

    let imgchildren=img.children
    let textchildren=text.children
    for (let ch of imgchildren) {
        ch.remove();
    }

    for (let th of textchildren) {
      th.remove();
  }
    let newimg=document.createElement('img')
    newimg.src='assets/Images/slider-2.png'
    img.appendChild(newimg)
    newimg.setAttribute('data-aos','fade-left')

  let icon=document.createElement('i')
  icon.setAttribute('class','fa-solid fa-mobile-screen')
  text.appendChild(icon)
  icon.setAttribute('data-aos','fade-up')


  let span=document.createElement('p')
  span.setAttribute('data-aos','fade-up')
  span.setAttribute('data-aos-duration','1000')
  span.innerHTML='Hot Deal'
  text.appendChild(span)
  

  let h2=document.createElement('h2')
  h2.setAttribute('data-aos','fade-up')
  h2.innerHTML='Up to 60% off Voucher'
  text.appendChild(h2)
}, 5000);
