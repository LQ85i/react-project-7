import { useState } from "react";
import itemData from '../Components/ItemData';


function Cart() {
    const [items, setItems] = useState([]) // format: [{id,count}]
    const maxItemCount = 99;

    const addItem = (itemID) => {
        const newItems = [...items];
        const index = newItems.indexOf(newItems.find(x => x.id === itemID))
        if (index > -1) {
            return;
        } else {
            newItems.push({ id: itemID, count: 1 });
            setItems(newItems);
        }
    }

    const removeItem = (itemID) => {
        const newItems = [...items];
        const index = newItems.indexOf(newItems.find(x => x.id === itemID))
        if (index > -1) {
            newItems.splice(index, 1);
        }
        setItems(newItems);
    }

    const getAllItemsCount = () => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].count;
        }
        return sum;
    }

    const getItemCount = (itemID) => {
        const index = items.indexOf(items.find(x => x.id === itemID));
        const count = items[index].count;
        return count;
    }

    const getItemTotal = (itemID) => {
        const price = itemData.getItem(itemID).price;
        const index = items.indexOf(items.find(x => x.id === itemID))
        const item = items[index];
        return item.count * price;
    }

    const getCartTotal = () => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            const price = itemData.getItem(items[i].id).price;
            sum += items[i].count * price;
        }
        return sum;
    }

    const clearItems = () => {
        setItems([]);
    }

    const setItemCount = (itemID, count) => {
        const newItems = [...items];
        let newCount = count;
        if (newCount > maxItemCount) {
            newCount = maxItemCount;
        }
        const index = newItems.indexOf(newItems.find(x => x.id === itemID))
        if (index > -1) {
            newItems[index] = { id: itemID, count: newCount };
            setItems(newItems);
        } else {
            newItems.push({ id: itemID, count: count });
            setItems(newItems);
        }
    }

    return { items, addItem, removeItem, getAllItemsCount, getItemCount, clearItems, setItemCount, getItemTotal, getCartTotal };
}

export default Cart