function GetProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    let item = ''

    basket.forEach(pr => {
        let count = 0;

        let a = pr.Price;
        let e = '';
        let total;
        for (let i = 1; i < a.length; i++) {
            e += a[i]
        }

        total = parseInt(e) * pr.Count;

        item += `
        <tr>
            <th scope="row">${pr.Id}</th>
            <td> <img src=${pr.Image} alt=""></td>
            <td>${pr.Name}</td>
            <td>${pr.Price}</td>
            <td> <input class="inp" type="number" value=${pr.Count}></td>
            <td id=${count}>$ ${total}</td>
            <td><i class="fa-solid fa-trash-can remove"></i></td>

            </tr>
            `
            count++;
        });

    document.getElementById('body').innerHTML = item
}
GetProduct()




let inputs = document.querySelectorAll('.inp')

for (let inp of inputs) {
    inp.addEventListener('change', function () {
        let basket = JSON.parse(localStorage.getItem('basket' ));
        id = inp.parentElement.parentElement.children[0].innerHTML
        let total;

        basket.forEach(pr => {
            if (id === pr.Id) {
                pr.Count = inp.value;

                if (inp.value < 0) {
                    inp.value = 0
                }
                let a = pr.Price;
                let e = '';

                for (let i = 1; i < a.length; i++) {
                    e += a[i]
                }

                total = parseInt(e) * inp.value;
            }
        })

        localStorage.setItem('basket', JSON.stringify(basket))
        inp.parentElement.parentElement.children[5].innerHTML ='$ '+total

        CountProduct()
    })

}


function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));
  
    document.querySelector('#count').innerHTML=basket.length
}
  
  CountProduct()



let removers=document.querySelectorAll('.remove')


removers.forEach(rmv => {
    rmv.onclick=function(){
        let prId = this.parentElement.parentElement.children[0].innerHTML
            let prparent=this.parentElement.parentElement
    
        let basket=JSON.parse(localStorage.getItem('basket'));
        
    //     console.log('salam');
        let arr=[]
    for(let i=0;i<basket.length;i++){
        if(basket[i].Id!=prId){
            arr.push(basket[i])
          
        }
        else{
            continue;
        }
    }
    prparent.style.display='none'
        
    // basket.forEach(pr => {
    //     if(pr.Id===prId){
    //        basket.pop(pr.Id);
    //     }
    // });

    localStorage.setItem('basket', JSON.stringify(arr))
    
    CountProduct()


}
});
