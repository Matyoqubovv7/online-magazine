let list = document.querySelector(".list");
let basket_json = [
{
    img: "ice-cream/01.png",
    name: "Zolotoy",
    price: 15000,
    count: 3,
    "total price": 45000,
  },
{
    img: "chocolate/04.png",
    name: "Kit Kat",
    price: 12000,
    count: 1,
    "total price": 12000,
  },
{
    img: "drink/03.png",
    name: "Coca-Cola",
    price: 14000,
    count: 3,
    "total price": 42000,
  },
{
    img: "chocolate/13.png",
    name: "Alpen Gold",
    price: 13000,
    count: 3,
    "total price": 39000,
  },
]

for (let i = 0; i < basket_json.length; i++) {
  let productAbout = document.createElement("div");
  productAbout.classList.add("product-about");
  productAbout.innerHTML = `
     <img src="../media/${basket_json[i]["img"]}" class="product-about-img">
     <p>name: ${basket_json[i]["name"]}</p>
     <p>price: ${basket_json[i]["price"]}</p>
     <p class='basket-count'>count: ${basket_json[i]["count"]}</p>
     <p class='basket-total-price'>total price: ${basket_json[i]["total price"]}</p>
     <button class="minus">-</button>
     <button class="product-delete">delete</button>
  `;

  list.appendChild(productAbout);
}
let minus = document.querySelectorAll(".minus");
minus.forEach((n, index) => {
  n.onclick = () => {
    let item = basket_json[index + 1];
    if (item["count"] > 1) {
      item["count"] -= 1;
      item["total price"] -= item["price"];
      let count_list = document.querySelectorAll(".basket-count");
      count_list[index].textContent = `count: ${item["count"]}`;
      let total_price = document.querySelectorAll(".basket-total-price");
      total_price[index].textContent = `total price: ${item["total price"]}`;
    }
  };
});

