import burger_stock from "../Images/burger_stock.jpg"
import pizza_stock from "../Images/pizza_stock.png"
import kebab_stock from "../Images/kebab_stock.png"
import soda_stock from "../Images/soda_stock.png"
import smoothie_stock from "../Images/smoothie_stock.jpg"
import coffee_stock from "../Images/coffee_stock.jpg"
import icecream_stock from "../Images/icecream_stock.jpg"
import uniqid from 'uniqid';

const itemData = (function() {
    const data = [{
        img: burger_stock,
        title: "Burger",
        price: 10.50,
        id: uniqid()
    },
    {
        img: pizza_stock,
        title: "Pizza",
        price: 12.00,
        id: uniqid()
    },
    {
        img: kebab_stock,
        title: "Kebab With A Long Name",
        price: 13.00,
        id: uniqid()
    },
    {
        img: soda_stock,
        title: "Soda",
        price: 1.00,
        id: uniqid()
    },
    {
        img: smoothie_stock,
        title: "Smoothie",
        price: 2.00,
        id: uniqid()
    },
    {
        img: coffee_stock,
        title: "Coffee",
        price: 1.00,
        id: uniqid()
    },
    {
        img: icecream_stock,
        title: "Ice Cream",
        price: 2.00,
        id: uniqid()
    }]

    const getData = () => {
        return data;
    }

    const getItem = (itemID) => {
        const index = data.indexOf(data.find(x => x.id === itemID))
        const item = data[index];
        return item;
    }

    return {getData, getItem}

})();



export default itemData;