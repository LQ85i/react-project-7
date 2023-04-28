import shopping_cart from "../Images/icon_shopping_cart.svg"

const Header = (props) => {
    const { navigate, cart, showCart, setShowCart } = props;

    const handleClick = (e) => {
        if (e.currentTarget.className === "home") {
            navigate("/");
        } else if (e.currentTarget.className === "store") {
            navigate("/store");
        } else if (e.currentTarget.className === "icon-cart") {
            if(showCart === "hidden"){
                setShowCart("")
            } else if(showCart === ""){
                setShowCart("hidden")
            }
            
        }
    }
    return (
        <div id="header">
            <div className="left">
                <button className="home" onClick={handleClick}>Home</button>
                <button className="store" onClick={handleClick}>Store</button>
            </div>
            <div className="center"></div>
            <div id="toggle-cart" className="right">
                <div className="cart-count">{cart.getAllItemsCount()}</div>
                <img className="icon-cart" src={shopping_cart} alt="" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Header