import React, { useState } from "react";
import ItemInputField from "./ItemInputField";

const ItemCard = (props) => {
    const { cart, item } = props;
    const [count, setCount] = useState(1);

    const handleAddToCart = () => {
        cart.setItemCount(item.id, parseInt(count, 10));
    }
    
    return <div className="item-card">
        <img className="image" src={item.img} alt="" />
        <div className="title">{item.title}</div>
        <div className="price">{item.price.toFixed(2) + " €"}</div>
        <ItemInputField cart={cart} defaultValue={1} count={count} setCount={setCount} />
        <button className="add-to-cart" onClick={handleAddToCart} >Add to cart</button>
    </div>
}

export default ItemCard