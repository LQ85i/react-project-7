import React from "react";
import ItemCard from "./ItemCard";
import itemData from "./ItemData";

const StorePage = (props) => {
    const { cart } = props;
    

    

    function renderItemCards() {
        let itemCards = [];
        for (let i = 0; i < itemData.getData().length; i++) {
            itemCards.push(
                <ItemCard cart={cart} item={itemData.getData()[i]} key={i}/>
            )
        }
        return itemCards;
    }


    return <div id="container-cards">
        {renderItemCards()}
    </div>
}

export default StorePage