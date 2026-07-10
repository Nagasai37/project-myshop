import ProductCard from "../components/ProductCard";

function Products(){

const products=[

{

id:1,

name:"Laptop",

price:65000,

image:"https://picsum.photos/200"

},

{

id:2,

name:"Headphones",

price:2500,

image:"https://picsum.photos/201"

},

{

id:3,

name:"Shoes",

price:3500,

image:"https://picsum.photos/202"

}

];

return(

<>

<h1>Products</h1>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(3,1fr)",

gap:"20px"

}}>

{

products.map((item)=>

<ProductCard

key={item.id}

name={item.name}

price={item.price}

image={item.image}

/>

)

}

</div>

</>

)

}

export default Products;