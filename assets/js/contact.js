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