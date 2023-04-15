import React from "react";

const ItemCard = (props) => {
    const {cart, item} = props;

    const handleAddToCart = () => {
        cart.addItem(item); 
    }

    return <div className="item-card">
        <img className="image" src={item.img} alt="" />
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>
        <button className="add-to-cart" onClick={handleAddToCart} >Add to cart</button>
    </div>
}

export default ItemCard