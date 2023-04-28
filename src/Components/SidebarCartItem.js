import { useEffect, useState } from "react";
import icon_x from "../Images/icon_x.svg"
import itemData from "./ItemData";
import ItemInputField from "./ItemInputField";

const SidebarCartItem = (props) => {
    const { cart, itemID } = props;
    const [count, setCount] = useState(0);

    const item = itemData.getItem(itemID);

    useEffect(()=>{
        setCount(cart.getItemCount(itemID));
    },[cart, itemID])

    const handleClick = (e) => {
        if (e.currentTarget.className.includes("delete-item")) {
            cart.removeItem(itemID)
        }
        return
    }

    return <div className="cart-item" data-item-id={itemID}>
        <img src={icon_x} alt="" className={["icon-x", "delete-item"].join(' ')} onClick={handleClick} />
        <img src={item.img} className="image" alt="" />
        <div className="title">{item.title}</div>
        <ItemInputField cart={cart} itemID={itemID} count={count} setCount={setCount}/>
        <div className="price">{item.price.toFixed(2) + " €"}</div>
        <div className="item-total-title">Total: </div>
        <div className="item-total">{cart.getItemTotal(itemID).toFixed(2) + " €"}</div>
    </div>
}

export default SidebarCartItem;