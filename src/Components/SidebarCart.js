import React from "react";
import SidebarCartItem from "./SidebarCartItem";
import itemData from "./ItemData";
import OutsideAlerterCart from "./ClickedOutsideCart";
import '../Styles/SidebarCart.css'

const SidebarCart = (props) => {
    const { cart, showCart, setShowCart } = props;



    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.className === "clear-cart") {
            cart.clearItems();
        } else if (e.currentTarget.className === "remove-item") {
            const itemID = e.currentTarget.parentNode.getAttribute("data-item-id");
            cart.removeItem(itemID);
        }
    }

    
        

    const renderCartItems = () => {
        if (cart.items.length === 0) {
            return <div className="cart-empty-msg">No items in cart.</div>
        }

        //sort cart items alphabetically by title
        let sortedItems = cart.items;
        if(cart.items.length > 1) {
            sortedItems.sort(function (a, b) {
                let titleA = itemData.getItem(a.id).title.toUpperCase();
                let titleB = itemData.getItem(b.id).title.toUpperCase();
                return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
            });
        }
        

        const cartItems = [];
        for (let i = 0; i < sortedItems.length; i++) {
            const item = sortedItems[i];
            cartItems.push(
                <SidebarCartItem
                    cart={cart}
                    itemID={item.id}
                    key={i} />
            )
        }
        return <>
            <div id="cart-top-buttons">
                <button className="to-checkout">Checkout</button>
                <button className="clear-cart" onClick={handleClick}>Clear cart</button>
            </div>
            <div className="cart-total-container">
                <div className="cart-total-title">Cart Total: </div>
                <div className="cart-total">{cart.getCartTotal().toFixed(2) + " €"}</div>
            </div>
            <div className="cart-items">{cartItems}</div>
            
        </>

    }
    return <OutsideAlerterCart showCart={showCart} setShowCart={setShowCart}>
        <div id="sidebar-cart" className={showCart}>
            {renderCartItems()}
        </div>
    </OutsideAlerterCart>


}

export default SidebarCart