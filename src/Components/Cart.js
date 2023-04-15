import { useState } from "react";


function Cart() {
    const [items, setItems] = useState([])
    
    
    const addItem = (item) => {
        const newItems = [...items];
        newItems.push(item);
        setItems(newItems);
    }

    return {items, addItem};
}

export default Cart