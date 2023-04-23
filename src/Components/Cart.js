import { useState } from "react";
import itemData from '../Components/ItemData';


function Cart() {
    const [items, setItems] = useState([])
    const maxItemCount = 99;
    
    const addItem = (itemID) => {
        if(getItemCount(itemID)<maxItemCount){
            const newItems = [...items];
            const newItem = itemData.find(obj => obj.id === itemID);
            newItems.push(newItem);
            setItems(newItems);
        }
    }

    const removeItem = (itemID) => {
        const newItems = [...items];
        const index = newItems.indexOf(newItems.find(x => x.id === itemID))
        if(index > -1){
            newItems.splice(index,1);
        }
        setItems(newItems);
    }

    const getItemCount = (itemID) => {
        let count = 0;
        for (let i = 0; i < items.length; i++) {
            if(items[i].id === itemID){
                count++;
            }
        }
        return count;
    }

    const getItemTotal = (itemID) => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            if(items[i].id === itemID){
                sum += items[i].price;
            }
        }
        return sum;
    }

    const getCartTotal = () => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].price;
        }
        return sum;
    }

    const clearItems = () => {
        setItems([]);
    }

    const setItemCount = (itemID, count) => {
        const newItems = [...items];

        //remove all items with itemID
        let index = newItems.length;
        while (index--) {
            if(newItems[index].id === itemID){
                newItems.splice(index,1);
            }
        }
        //add count amount of itemID's
        
        for (let i = 0; i < count; i++) {
            const newItem = itemData.find(obj => obj.id === itemID);
            newItems.push(newItem);
        }
        setItems(newItems);
    }

    return {items, addItem, removeItem, clearItems, setItemCount, getItemTotal, getCartTotal};
}

export default Cart