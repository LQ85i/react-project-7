import shopping_cart from "../Images/icon_shopping_cart.svg"
import burger_logo from "../Images/burger_logo.png";
import '../Styles/Header.css';

const Header = (props) => {
    const { navigate, cart, showCart, setShowCart } = props;

    const handleClick = (e) => {
        if (e.currentTarget.className === "store") {
            navigate("/react-project-7/store");
        } else if (e.currentTarget.className === "icon-cart") {
            if(showCart === "hidden"){
                setShowCart("")
            } else if(showCart === ""){
                setShowCart("hidden")
            }
            
        } else if (e.currentTarget.className === "center") {
            navigate("/react-project-7");
        }
    }
    return (
        <div id="header">
            <div className="left">
                <button className="store" onClick={handleClick}>Products</button>
            </div>
            <div className="center" onClick={handleClick}>
                <div>
                    <img className="burger-logo" src={burger_logo} alt="" />
                    <div className="logo-text">FAST FOOD</div>
                </div>
            </div>
            <div id="toggle-cart" className="right">
                <div className="cart-count">{cart.getAllItemsCount()}</div>
                <img className="icon-cart" src={shopping_cart} alt="" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default Header