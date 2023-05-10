import React from "react";

const ItemCard = (props) => {
    const { item, showEditOrder, setShowEditOrder, setEditOrderItemID } = props;

    const handleEditOrder = () => {
        if(!showEditOrder) {
            setShowEditOrder(true);
            setEditOrderItemID(item.id);
        }
    }
    
    return <div className="item-card">
        <img className="image" src={item.img} alt="" />
        <div className="title">{item.title}</div>
        <div className="price">{item.price.toFixed(2) + " €"}</div>
        <button className="edit-order" onClick={handleEditOrder} >I want this!</button>
    </div>
}

export default ItemCard