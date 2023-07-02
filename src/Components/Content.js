import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "./StorePage";

const Content = (props) => {
    const { navigate, cart } = props;
    return (
        <div id="content">
            <Routes>
                <Route path='/react-project-7' element={<HomePage navigate={navigate} />}></Route>
                <Route path='/store' element={<StorePage cart={cart} />} ></Route>
            </Routes>
        </div>
    )
}

export default Content