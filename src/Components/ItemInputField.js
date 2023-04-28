import icon_add from "../Images/icon_add.svg"
import icon_remove from "../Images/icon_remove.svg"

const ItemInputField = (props) => {
    const { cart, itemID, count, setCount } = props;


    const handleClick = (e) => {
        if (e.currentTarget.className === "icon-remove" && count > 0) {
            const newCount = parseInt(count, 10) - 1;
            setCount(newCount);
            if(e.currentTarget.parentNode.parentNode.className==="cart-item"){
                cart.setItemCount(itemID, newCount);
            }
        } else if (e.currentTarget.className === "icon-add" && count < 99) {
            const newCount = parseInt(count, 10) + 1;
            setCount(newCount);
            if(e.currentTarget.parentNode.parentNode.className==="cart-item"){
                cart.setItemCount(itemID, newCount);
            }
        }
    }
    const handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        let newCount = parseInt(value, 10);
        const parentClass = e.target.parentNode.parentNode.className;
        if (isNaN(value)) {
            return;
        }
        if (value.length > 2) {
            value = value.slice(0, 2);
        } else if (value.startsWith("0") && value.length === 2) {
            value = value.slice(1, 2);
        } else if (value.includes(".")) {
            value = 0;
        } else if (value === "") {
            value = 0;
        } else if (newCount >= 0 && newCount <= 99) {
            value = newCount;
        } else if (newCount > 99) {
            value = 99;
        } else if (newCount < 0 ){
            value = 0;
        }
        newCount = parseInt(value, 10);
        if (parentClass === "cart-item") {
            setCount(value);
        } else if (parentClass === "item-card") {
            setCount(value);
        }
    }

    const handleBlur = (e) => {
        const parentClass = e.target.parentNode.parentNode.className;
        if (parentClass === "cart-item") {
            cart.setItemCount(itemID, count);
        }

    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            cart.setItemCount(itemID, count);
        }
        if(e.key === '.' && e.preventDefault()){
            return true;
        } else return false;
    }

    return <div className="container-count">
        <img src={icon_remove} alt="" className="icon-remove" onClick={handleClick} />
        <input
            type="number"
            className="input-count"
            value={count}
            onChange={handleChange}
            onPaste={(e) => e.preventDefault()}
            max={99}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
        <img src={icon_add} alt="" className="icon-add" onClick={handleClick} />
    </div>
}

export default ItemInputField;