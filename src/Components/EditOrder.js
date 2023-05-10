import { useState } from "react";
import icon_placeholder from "../Images/icon_placeholder.svg"
import icon_x from "../Images/icon_x.svg"
import ItemInputField from "./ItemInputField";
import itemData from "./ItemData";

const EditOrder = (props) => {

    const { cart, editOrderItemID, setShowEditOrder } = props;

    const [count, setCount] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.className === "add-to-cart") {
            cart.addItem(editOrderItemID);
            cart.setItemCount(editOrderItemID, parseInt(count, 10));
            setShowEditOrder(false);
        } else if (e.target.className === "close") {
            setShowEditOrder(false);
        }
    }

    return (<div id="edit-order">
        <img className="close" src={icon_x} onClick={handleClick} alt="" />
        <img className="item-image" src={icon_placeholder} alt="" />
        <div className="item-name">{itemData.getItem(editOrderItemID).title}</div>
        <div className="options">
            <label className="option">
                <input type="checkbox" /> food option
            </label>
            <label className="option">
                <input type="checkbox" /> food option
            </label>
            <label className="option">
                <input type="checkbox" /> food option
            </label>
        </div>
        <ItemInputField cart={cart} itemID={editOrderItemID} count={count} setCount={setCount} />
        <div className="total-price">
            <div className="text">Total: </div>
            <div className="value">{itemData.getItem(editOrderItemID).price.toFixed(2) + " €"}</div>
        </div>
        <button className="add-to-cart" onClick={handleClick}>add to cart</button>
    </div>);
}

export default EditOrder;