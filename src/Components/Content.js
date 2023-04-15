import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "./StorePage";

const Content = (props) => {
    const {cart, items} = props;
    return (
        <div id="content">
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/store' element={<StorePage cart={cart} items={items}/>} ></Route>
            </Routes>
        </div>
    )
}

export default Content