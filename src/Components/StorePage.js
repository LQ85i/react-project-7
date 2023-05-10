import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import itemData from "./ItemData";
import icon_arrows_right from "../Images/icon_arrows_right.svg"
import icon_arrows_left from "../Images/icon_arrows_left.svg"
import icon_search from "../Images/icon_search.svg"
import EditOrder from "./EditOrder";
import OutsideAlerterEditOrder from "./ClickedOutsideEditOrder";

const StorePage = (props) => {
    const { cart } = props;

    const [showSearch, setShowSearch] = useState(false)
    const [showEditOrder, setShowEditOrder] = useState(false);
    const [editOrderItemID, setEditOrderItemID] = useState(null);

    const [sidebarSearchClassName, setSidebarSearchClassName] = useState("hidden");
    const [hideSearchClassName, setHideSearchClassName] = useState("hide-search hidden");
    const [expandSearchClassName, setExpandSearchClassName] = useState("expand-search");

    const handleClick = (e) => {
        if (e.currentTarget.className === "hide-search") {
            setShowSearch(false);
        } else if (e.currentTarget.className === "expand-search") {
            setShowSearch(true);
        }
    }

    useEffect(() => {
        if (showSearch === true) {
            setSidebarSearchClassName("");
            setHideSearchClassName("hide-search");
            setExpandSearchClassName("expand-search hidden");
        } else if (showSearch === false) {
            setSidebarSearchClassName("hidden");
            setHideSearchClassName("hide-search hidden");
            setExpandSearchClassName("expand-search");
        }

    }, [showSearch])

    const renderItemCards = () => {
        let itemCards = [];
        for (let i = 0; i < itemData.getData().length; i++) {
            itemCards.push(
                <ItemCard item={itemData.getData()[i]} showEditOrder={showEditOrder} setShowEditOrder={setShowEditOrder} setEditOrderItemID={setEditOrderItemID} key={i} />
            )
        }
        return itemCards;
    }

    const renderEditOrder = () => {
        if (showEditOrder) {
            return (<EditOrder cart={cart} editOrderItemID={editOrderItemID} setShowEditOrder={setShowEditOrder} />)
        } else {
            return;
        }
    }

    return <div id="store-view">
        <div id="sidebar-search" className={sidebarSearchClassName}>
            <div className="main-title">Search & Filters</div>
            <div className="search-bar">
                <input className="input" type="text" placeholder="search..." />
                <img className="icon_search" src={icon_search} alt="" />
            </div>
            <div className="filter-category">
                <div className="title">Category</div>
                <div className="filter">
                    <label className="text">
                        <input className="checkbox" type="checkbox" name="filter" />
                        food filter
                    </label>
                </div>
                <div className="filter">
                    <label className="text">
                        <input className="checkbox" type="checkbox" name="filter" />
                        food filter
                    </label>
                </div>
                <div className="filter">
                    <label className="text">
                        <input className="checkbox" type="checkbox" name="filter" />
                        food filter
                    </label>
                </div>
            </div>
        </div>
        <div className={hideSearchClassName} onClick={handleClick}>
            <img className="icon-arrows-left hidden" src={icon_arrows_left} alt="" />
        </div>
        <div className={expandSearchClassName} onClick={handleClick}>
            <img className="icon-arrows-right" src={icon_arrows_right} alt="" />
            <div className="text">Search & Filters</div>
        </div>
        <div id="container-cards" className={showEditOrder ? 'blurred' : ''}>
            {renderItemCards()}
        </div>
        <OutsideAlerterEditOrder showEditOrder={showEditOrder} setShowEditOrder={setShowEditOrder}>
            {renderEditOrder()}
        </OutsideAlerterEditOrder>
    </div >

}

export default StorePage