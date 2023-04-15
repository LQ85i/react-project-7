import React from "react";

const SidebarCart = (props) => {
    const {showCart, cart} = props;
    const renderCartItems = () => {
        let cartItems = [];
        for (let i = 0; i < cart.items.length; i++) {
            cartItems.push(<div className="cart-item" key={i}>
                <img src={cart.items[i].img} className="image" alt=""/>
                <div className="title">{cart.items[i].title}</div>
                <div className="price">{cart.items[i].price}</div>
            </div>)
        }
        return <div className="cart-items">{cartItems}</div>
    }
    return <div id="sidebar-cart" className={showCart} >
        {renderCartItems()}
    </div>
}

export default SidebarCart