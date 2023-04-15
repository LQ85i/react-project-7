import React from "react";
import ItemCard from "./ItemCard";
import placeholder_img from "../Images/placeholder_image.svg"

const StorePage = (props) => {
    const { cart } = props;
    const items = [{
        img: placeholder_img,
        title: "item1",
        price: "1.00 €"
    },
    {
        img: placeholder_img,
        title: "item2",
        price: "2.00 €"
    },
    {
        img: placeholder_img,
        title: "item3",
        price: "3.00 €"
    },
    {
        img: placeholder_img,
        title: "item4",
        price: "4.00 €"
    }]

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