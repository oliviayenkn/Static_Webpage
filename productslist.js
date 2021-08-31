const url = "https://kea-alt-del.dk/t7/api/products";

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
}

function showProduct(product){
    console.log(product);
    //grab the templaet
    const template = document.querySelector("#smallproduct").content;
    //clone it
    const copy = template.cloneNode(true);
    //change  content
    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`; 
    copy.querySelector("h3").textContent = product.productdisplayname;

    if(product.soldout){
        copy.querySelector("article").classList.add("soldOut");
    }
    if(product.discount){
        copy.querySelector("article").classList.add("onSale");
        copy.querySelector(".discounted p").textContent = "DISCOUNT";
    }
    
    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
}

// //    <template id="smallproduct">

// <img src = "https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
// alt="Clothes">

// <h3><a href="product.html">Sahara Team Inda Fanwear Round Neck Jersey</a></h3>
// <p class="suble">T-shirst // Nike</p>
// <p class="price">1595</p>
// </div>

// </template>