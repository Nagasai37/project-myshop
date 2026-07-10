import Button from "./button";

function ProductCard({name,price,image}){

return(

<div className="card">

<img src={image} alt={name}/>

<h3>{name}</h3>

<p>₹{price}</p>

<Button text="Add To Cart"/>

</div>

)

}

export default ProductCard;