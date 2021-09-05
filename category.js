const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data){
        handleProductList(data);
    });

function handleProductList(data) {
    console.log(data);
    data.forEach(showProduct);
}

function showProduct(product){
    console.log(product);
    //grab the templaet
    const template = document.querySelector("#brand").content;
    //clone it
    const copy = template.cloneNode(true);
    //change  content

    copy.querySelector("a").setAttribute("href", "productlist.html?/category?="+product.category);


    copy.querySelector("h3").textContent = product.category;

    //grab parent
    const parent = document.querySelector("main");
    //append
    parent.appendChild(copy);
}
