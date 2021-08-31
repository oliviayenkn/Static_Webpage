// https://www.kea-alt-del.dk/t7/api/products/2801
// fetch the data
// populate the page

const url = "https://www.kea-alt-del.dk/t7/api/products/2300";
fetch(url)
    .then((res)=>res.json())
    .then((data)=>showProduct(data));

function showProduct(product){
console.log(product);
document.querySelector(".brand").textContent = product.brandname;
document.querySelector(".productname").textContent =
product.productdisplayname;

document.querySelector(
    "img"
).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
document.querySelector("img").alt = product.productdisplayname;

}

// 
