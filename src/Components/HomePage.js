import React from "react";
import burger_stock from "../Images/burger_stock.jpg"
import icon_placeholder from "../Images/icon_placeholder.svg"

const HomePage = (props) => {

    const { navigate } = props;

    const handleClick = (e) => {
        if (e.currentTarget.className === "button-store") {
            navigate("/store");
        }
    }

    const cycleImages = () => {
        return burger_stock
    }

    return (
        <div className="container-home">
            <div className="presentation">
                <div className="text-background">
                    <div className="text">Filler text Filler text<br /><br />Filler text Filler text</div>
                    <button className="button-store" onClick={handleClick}>Order Now!</button>
                </div>
                <div className="image" style={{ backgroundImage: 'url(' + cycleImages() + ')' }} />
            </div>
            <div className="info-cards">
                <div className="card">
                    <img className="image" src={icon_placeholder} alt="" />
                    <div className="text">feature information</div>
                </div>
                <div className="card">
                    <img className="image" src={icon_placeholder} alt="" />
                    <div className="text">feature information</div>
                </div>
                <div className="card">
                    <img className="image" src={icon_placeholder} alt="" />
                    <div className="text">feature information</div>
                </div>
            </div>
            <div className="opening-hours">
                <div className="title">OPEN:</div>
                <div className="hours-table">
                    <div className="row">
                        <div className="days">Mon - Thu: </div>
                        <div className="hours">10 - 22</div>
                    </div>
                    <div className="row">
                        <div className="days">Fri: </div>
                        <div className="hours">10 - 23</div>
                    </div>
                    <div className="row">
                        <div className="days">Sat: </div>
                        <div className="hours">11 - 23</div>
                    </div>
                    <div className="row">
                        <div className="days">Sun: </div>
                        <div className="hours">11 - 22</div>
                    </div>
                </div>
                <div className="address">Address 123, 00000 City</div>
                <div className="phone-number">+012 0123 01230<br/>+012 0123 01231</div>
            </div>
        </div>)
}

export default HomePage