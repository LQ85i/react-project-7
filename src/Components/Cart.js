import { useState } from "react";
import itemData from '../Components/ItemData';


function Cart() {
    const [items, setItems] = useState([])
    
    
    const addItem = (itemID) => {
        const newItems = [...items];
        const newItem = itemData.find(obj => obj.id === itemID);
        newItems.push(newItem);
        setItems(newItems);
    }

    const removeItem = (itemID) => {
        const newItems = [...items];
        const index = newItems.indexOf(newItems.find(x => x.id === itemID))
        if(index > -1){
            newItems.splice(index,1);
        }
        setItems(newItems);
    }

    const clearItems = () => {
        setItems([]);
    }

    return {items, addItem, removeItem, clearItems};
}

export default Cart