const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://www.kea-alt-del.dk/t7/api/products/" + id;
fetch(url)
    .then((res)=>res.json())
    .then((data)=>showProduct(data));

function showProduct(product){
console.log(product);
document.querySelector(".brand").textContent = product.brandname;
document.querySelector(".productname").textContent =
product.productdisplayname;
document.querySelector(".price").textContent = product.price +",-";

document.querySelector(
    "img"
).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector("img").alt = product.productdisplayname;

}

// 
