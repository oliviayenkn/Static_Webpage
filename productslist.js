const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

const url = "https://www.kea-alt-del.dk/t7/api/products?category=Apparel";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data){
        handleProductList(data);
    });

function handleProductList(data) {
    // console.log(data);
    data.forEach(showProduct);
    data.forEach(showCategory);
}

function showProduct(product){
    console.log(product);
    //grab the templaet
    const template = document.querySelector("#smallproduct").content;
    // const template = document.querySelector("#category").content;
    //clone it
    const copy = template.cloneNode(true);
    //change  content

    copy.querySelector("a").setAttribute("href", "product.html?id="+product.id);
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`; 
    copy.querySelector("h4").textContent = product.productdisplayname;
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    copy.querySelector(".price").textContent = product.price + ",-";

    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }

    if(product.discount){
        copy.querySelector("article").classList.add("onSale");  
        copy.querySelector(".discounted p").textContent = "DISCOUNT" 
        copy.querySelector(".percent").textContent = product.discount + "%";
    }


    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
}


function showCategory(product){
console.log(product);
document.querySelector(".category").textContent = product.category;

}




// //    <template id="smallproduct">

// <img src = "https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
// alt="Clothes">

// <h3><a href="product.html">Sahara Team Inda Fanwear Round Neck Jersey</a></h3>
// <p class="suble">T-shirst // Nike</p>
// <p class="price">1595</p>
// </div>

// </template>