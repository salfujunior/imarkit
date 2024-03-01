function openOption() {
    document.getElementById("myOption").style.width = "200px";
  }
  
function closeOption() {
    document.getElementById("myOption").style.width = "0";
  }


const food=[
    {id: 2, name: "Product2", price: 20, image: "images/foods/IMG-20230628-WA0002.jpg", info: "this is", use: "Brand New "},
    {id: 3, name: "Product3", price: 30, image: src="images/foods/IMG-20230628-WA0009.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="images/foods/IMG-20230628-WA0011.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="images/foods/WhatsApp Image 2023-06-28 at 11.18.45.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="images/foods/IMG-20230628-WA0010.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="images/foods/WhatsApp Image 2023-06-28 at 11.18.44.jpg", info: "this is"},
  ]; 
const cloth=[    
    {id: 1, name: "Product1", price: 10, image: "images/cloths/black.jpg", info: "this is", use: "Fairly Used "},
    {id: 1, name: "Product1", price: 10, image: "images/cloths/black -shoe.jpg", info: "this is", use: "Fairly Used "},
    {id: 1, name: "Product1", price: 10, image: "images/cloths/black -shoe.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: "images/cloths/black.jpg", info: "this is"},

];
const furniture=[
    {id: 3, name: "Product3", price: 30, image: src="images/furnitures/mum.jpg", info: "this is", use: "Brand New  "},
    {id: 3, name: "Product3", price: 30, image: src="images/furnitures/mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="images/furnitures/mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="images/furnitures/mum.jpg", info: "this is"},
    {id: 3, name: "Product3", price: 30, image: src="images/furnitures/mum.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "images/furnitures/mum.jpg", info: "this is"},

]; 
const electronic=[



];
const stationary=[


    
];
const medicine=[


    
];
const hairStyle=[


    
];
const painter=[


    
];
const teacher=[


    
];
const bank=[


    
];
const all=[


    
];
const cosmetic=[
    {id: 2, name: "Product2", price: 20, image: "images/cosmetic/soap.jpg", info: "this is", use: "Brand New  "},
    {id: 1, name: "Product1", price: 10, image: src="images/cosmetic/body_spray.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="images/cosmetic/toothpaste2.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="images/cosmetic/toothbrush.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: "images/cosmetic/soap.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="images/cosmetic/body_spray.jpg", info: "this is"},
    {id: 2, name: "Product2", price: 20, image: src="images/cosmetic/toothpaste2.jpg", info: "this is"},
    {id: 1, name: "Product1", price: 10, image: src="images/cosmetic/toothbrush.jpg", info: "this is"},
];

const products= [...food, ...cloth, ...furniture, ...cosmetic]
products.sort((a,b)=> 0.5 - Math.random())
all.sort((a,b)=> 0.5 - Math.random())
food.sort((a,b)=> 0.5 - Math.random())
cloth.sort((a,b)=> 0.5 - Math.random())
furniture.sort((a,b)=> 0.5 - Math.random())
electronic.sort((a,b)=> 0.5 - Math.random())
stationary.sort((a,b)=> 0.5 - Math.random())
medicine.sort((a,b)=> 0.5 - Math.random())
hairStyle.sort((a,b)=> 0.5 - Math.random())
painter.sort((a,b)=> 0.5 - Math.random())
teacher.sort((a,b)=> 0.5 - Math.random())
bank.sort((a,b)=> 0.5 - Math.random())
cosmetic.sort((a,b)=> 0.5 - Math.random())

function displayAll(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    products.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayFood(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    food.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayCloths(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    cloth.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayFurnitures(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    furniture.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayCosmetics(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    cosmetic.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayFood(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    food.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayFood(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    food.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
            <button class="buy-button">BUY</button>

          
        `;
        

        productList.appendChild(productCard);

    });
    
    
}

function displayProducts(){
    const productList=document.getElementById("product-list");
    productList.innerHTML="";
    
    


    products.forEach(product =>{
        const productCard=document.createElement("div");
        productCard.className="product-card";
        productCard.innerHTML = 
        ` 
            <h3 style="text-align: center;">${product.name}</h3>
            <img src="${product.image}">
            <h4>Price:NLE${product.price}</h4>
            <p>${product.info}</p>
            <h5 id="use">${product.use}</h5>
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

const myTextElement = document.getElementById("use");
const value = "Fairly Used";
const value2 = "Brand New";

if(value === "Fairly Used"){
    myTextElement.classList.add("red");
}else {
    myTextElement.classList.add("green");
}
if(value2 === "Brand New"){
    myTextElement.classList.add("green");
}else {
    myTextElement.classList.add("green");
}

