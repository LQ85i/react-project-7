import React from "react";
import ItemCard from "./ItemCard";

const StorePage = (props) => {
    const { cart, items } = props;
    

    

    function renderItemCards() {
        let itemCards = [];
        
        for (let i = 0; i < items.length; i++) {
            itemCards.push(
                <ItemCard cart={cart} item={items[i]} key={i}/>
            )
        }
        return itemCards;
    }


    return <div id="container-cards">
        {renderItemCards()}
    </div>
}

export default StorePage