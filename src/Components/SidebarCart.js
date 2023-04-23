import React from "react";
import OutsideAlerter from "./ClickedOutsideCart";

const SidebarCart = (props) => {
    const { cart, showCart, setShowCart } = props;



    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.className === "clear-cart") {
            cart.clearItems();
        }
    }

    const handleCountChange = (e) => {
        const count = e.target.value;
        if(isNaN(count) || count === ""){
            return;
        }
        if(count<=99){
            const itemID = e.target.parentNode.getAttribute("data-item-id");
            cart.setItemCount(itemID, count);
        }
        
    }

    const renderCartItems = () => {
        if (cart.items.length === 0) {
            return <div className="cart-empty-msg">No items in cart.</div>
        }

        // group cart items by their id
        const groupedItemsTemp = cart.items.reduce((acc, item) => {
            const key = item.id;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});
        const groupedItems = Object.values(groupedItemsTemp);

        //sort cart items alphabetically by title
        groupedItems.sort(function (a, b) {
            let titleA = a[0].title.toUpperCase();
            let titleB = b[0].title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });

        const cartItems = []
        for (let i = 0; i < groupedItems.length; i++) {
            cartItems.push(
                <div className="cart-item" data-item-id={groupedItems[i][0].id} key={i}>
                    <img src={groupedItems[i][0].img} className="image" alt="" />
                    <div className="title">{groupedItems[i][0].title}</div>
                    <div className="price">{groupedItems[i][0].price}</div>
                    <input type="number" className="edit-count" value={groupedItems[i].length} onChange={handleCountChange} max={99} maxLength={2}/>

                </div>
            )
        }
        return <>
            <div id="cart-top-buttons">
                <button className="to-checkout">Checkout</button>
                <button className="clear-cart" onClick={handleClick}>Clear cart</button>
            </div>
            <div className="cart-items">{cartItems}</div>
        </>

    }
    return <OutsideAlerter showCart={showCart} setShowCart={setShowCart}>
        <div id="sidebar-cart" className={showCart}>
            {renderCartItems()}
        </div>
    </OutsideAlerter>


}

export default SidebarCart