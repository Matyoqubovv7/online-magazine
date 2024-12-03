let list = document.querySelector('.list')
let basket_json = {
    1:{
        'img':'ice-cream/01.png',
        'name':'Zolotoy',
        'price':15000,
        'count':3,
        'total price':45000
    },
    2:{
        'img':'chocolate/04.png',
        'name':'Kit Kat',
        'price':12000,
        'count':1,
        'total price':12000
    },
    3:{
        'img':'drink/03.png',
        'name':'Coca-Cola',
        'price':14000,
        'count':3,
        'total price':42000
    },
    4:{
        'img':'chocolate/13.png',
        'name':'Alpen Gold',
        'price':13000,
        'count':3,
        'total price':39000
    },
}

for (let i = 1; i <=4; i++) {
    let productAbout = document.createElement("div");
    productAbout.classList.add("product-about");
    productAbout.innerHTML =`
     <img src="../media/${basket_json[i]['img']}" class="product-about-img">
              
                  <p > name:${basket_json[i]['name']}</p>
                  <p > price:${basket_json[i]['price']}</p>
                  <p > count:${basket_json[i]['count']}</p>
                  <p > total price:${basket_json[i]['total price']}</p>
                 
                     
                      <button class="product-delete">delete</button>
                  </div>
              </div>  `

                list.appendChild(productAbout)
              
}