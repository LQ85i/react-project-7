import React, { useRef } from "react";
import burger_stock from "../Images/burger_stock.jpg"
import icon_placeholder from "../Images/icon_placeholder.svg"
import icon_arrows_left from "../Images/icon_arrows_left.svg"
import icon_arrows_right from "../Images/icon_arrows_right.svg"

const HomePage = (props) => {

    const { navigate } = props;

    const infoCards = useRef(0);

    const handleClick = (e) => {
        if (e.currentTarget.className === "button-store") {
            navigate("/store");
        } else if(e.currentTarget.className==="arrows") {
            if(e.currentTarget.childNodes[0].className==="right"){
                infoCards.current.scrollTo({
                    top: 0,
                    left: infoCards.current.scrollLeft + window.innerWidth,
                    behavior: 'smooth'
                });
            } else if(e.currentTarget.childNodes[0].className==="left"){
                infoCards.current.scrollTo({
                    top: 0,
                    left: infoCards.current.scrollLeft - window.innerWidth,
                    behavior: 'smooth'
                });
            }
        }
    }

    const cycleImages = () => {
        return burger_stock
    }

    return (
        <div id="container-home">
            <div className="presentation">
                <div className="slide-background">
                    <div className="text">Filler text<br /><br />Filler text Filler text</div>
                    <button className="button-store" onClick={handleClick}>Order Now!</button>
                </div>
                <div className="image" style={{ backgroundImage: 'url(' + cycleImages() + ')' }} />
            </div>
            <div className="info-cards" ref={infoCards}>
                <section>
                    <div className="arrows"></div>
                    <div className="card">
                        <img className="image" src={icon_placeholder} alt="" />
                        <div className="text">feature information</div>
                    </div>
                    <div className="arrows" onClick={handleClick}>
                        <img className="right" src={icon_arrows_right} alt="" />
                    </div>

                </section>
                <section>
                    <div className="arrows" onClick={handleClick}>
                        <img className="left" src={icon_arrows_left} alt="" />
                    </div>
                    <div className="card">
                        <img className="image" src={icon_placeholder} alt="" />
                        <div className="text">feature information feature information </div>
                    </div>
                    <div className="arrows" onClick={handleClick}>
                        <img className="right" src={icon_arrows_right} alt="" />
                    </div>
                </section>
                <section>
                    <div className="arrows" onClick={handleClick}>
                        <img className="left" src={icon_arrows_left} alt="" />
                    </div>
                    <div className="card">
                        <img className="image" src={icon_placeholder} alt="" />
                        <div className="text">feature information feature information feature information </div>
                    </div>
                    <div className="arrows"></div>
                </section>

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
                <div className="phone-number">+012 0123 01230<br />+012 0123 01231</div>
            </div>
        </div>)
}

export default HomePage