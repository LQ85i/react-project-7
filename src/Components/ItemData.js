import placeholder_img from "../Images/icon_placeholder.svg";
import uniqid from 'uniqid';

const itemData = (function() {
    const data = [{
        img: placeholder_img,
        title: "item1",
        price: 1.50,
        id: uniqid()
    },
    {
        img: placeholder_img,
        title: "item2",
        price: 2.00,
        id: uniqid()
    },
    {
        img: placeholder_img,
        title: "item3",
        price: 3.00,
        id: uniqid()
    },
    {
        img: placeholder_img,
        title: "Item With Long Name",
        price: 40.00,
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