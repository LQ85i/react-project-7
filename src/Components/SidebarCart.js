import React from "react";
import icon_add from "../Images/icon_add.svg"
import icon_remove from "../Images/icon_remove.svg"

const SidebarCart = (props) => {
    const { showCart, cart } = props;



    const renderCartItems = () => {

        // group cart items by their title
        // for example all item1's are grouped together
        const groupedItemsTemp = cart.items.reduce((acc, item) => {
            const key = item.id;
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(item);
            return acc;
        }, {});
        const groupedItems = Object.values(groupedItemsTemp);

        const cartItems = []
        for (let i = 0; i < groupedItems.length; i++) {
            cartItems.push(
                <div className="cart-item" key={i}>
                    <img src={groupedItems[i][0].img} className="image" alt="" />
                    <div className="title">{groupedItems[i][0].title}</div>
                    <div className="price">{groupedItems[i][0].price}</div>
                    <div className="container-count">
                        <img className="icon-remove" src={icon_remove} alt="" />
                        <div className="count">{groupedItems[i].length}</div>
                        <img className="icon-add" src={icon_add} alt="" />
                    </div>

                </div>
            )
        }
        return <div className="cart-items">{cartItems}</div>
    }
    return <div id="sidebar-cart" className={showCart} >
        {renderCartItems()}
    </div>
}

export default SidebarCart