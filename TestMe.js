function openOption() {
    document.getElementById("myOption").style.width = "200px";
  }
  
function closeOption() {
    document.getElementById("myOption").style.width = "0";
  }


const products =[
    {id: 1, name: "Product1", price: 10, image: "black -shoe.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: "black.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "soap.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="body_spray.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="toothpaste2.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="toothbrush.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: "black -shoe.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: "black.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "soap.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="body_spray.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="toothpaste2.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="toothbrush.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="mum.jpg", info: "this is"},


];
function displayProducts(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";

    products.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 >${product.name}</h3>
            <img src="${product.image}">
            <p style="">Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <span class="delete-button" onclick="deleteProduct(${product.id})">Delete</span>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
}
function deleteProduct (productid){
    const index= products.findIndex(product=> productid === productid);
    if (index !== -1){
        products.splice(index,1);
        displayProducts();
    }
}

displayProducts();