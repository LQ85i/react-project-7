import React from "react";

const Header = (props) => {
    const { navigate } = props;


    function handleClick(e) {
        if (e.currentTarget.className === "home") {
            navigate("/");
        } else if (e.currentTarget.className === "store") {
            navigate("/store");
        }
    }

    return (
        <div id="header">
            <div className="left">
                <button className="home" onClick={handleClick}>Home</button>
                <button className="store" onClick={handleClick}>Store</button>
            </div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
    )
}

export default Header