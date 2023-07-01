import React, { useRef } from "react";
import burger_stock from "../Images/burger_stock.jpg"
import icon_arrows_left from "../Images/icon_arrows_left.svg"
import icon_arrows_right from "../Images/icon_arrows_right.svg"
import '../Styles/HomePage.css';
import icon_arrow_left from '../Images/icon_arrow_left.svg';
import icon_arrow_right from '../Images/icon_arrow_right.svg';
import icon_circle from '../Images/icon_circle.svg';
import icon_circle_filled from '../Images/icon_circle_filled.svg';
import icon_recycle from '../Images/icon_recycle.svg';
import icon_acute from '../Images/icon_acute.svg';
import icon_diversity from '../Images/icon_diversity.svg';

const HomePage = (props) => {

    const { navigate } = props;

    const infoCards = useRef(0);

    const handleClick = (e) => {
        if (e.currentTarget.className === "button-store") {
            navigate("/store");
        } else if (e.currentTarget.className === "arrows") {
            if (e.currentTarget.childNodes[0].className === "right") {
                infoCards.current.scrollTo({
                    top: 0,
                    left: infoCards.current.scrollLeft + infoCards.current.parentNode.parentNode.offsetWidth,
                    behavior: 'smooth'
                });
            } else if (e.currentTarget.childNodes[0].className === "left") {
                infoCards.current.scrollTo({
                    top: 0,
                    left: infoCards.current.scrollLeft - infoCards.current.parentNode.parentNode.offsetWidth,
                    behavior: 'smooth'
                });
            }
        }
    }



    return (
        <div id="container-home">
            <div className="presentation">
                <div className="text-box">
                    <h1 className="title">We value consistency</h1>
                    <p className="text">Every meal is made by trained experts following strict procedures. We ensure the ingredients are always fresh and delicious.</p>
                    <button className="read-more">Read more</button>
                    <div className="navbar">
                        <img className="arrow" src={icon_arrow_left} alt="" />
                        <img className="circle" src={icon_circle} alt="" />
                        <img className="circle" src={icon_circle} alt="" />
                        <img className="circle filled" src={icon_circle_filled} alt="" />
                        <img className="circle" src={icon_circle} alt="" />
                        <img className="circle" src={icon_circle} alt="" />
                        <img className="arrow" src={icon_arrow_right} alt="" />
                    </div>
                </div>
                <div className="image-box">
                    <img src={burger_stock} alt="" />
                </div>
            </div>
            <div className="info-cards" ref={infoCards}>
                <section>
                    <div className="arrows"></div>
                    <div className="card">
                        <img className="image" src={icon_recycle} alt="" />
                        <div className="text">We run sustainable practices</div>
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
                        <img className="image" src={icon_acute} alt="" />
                        <div className="text">Fast deliveries in fresh condition</div>
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
                        <img className="image" src={icon_diversity} alt="" />
                        <div className="text">We treat everyone with respect</div>
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