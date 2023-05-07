import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "./StorePage";

const Content = (props) => {
    const { navigate, cart } = props;
    return (
        <div id="content">
            <Routes>
                <Route path='/' element={<HomePage navigate={navigate} />}></Route>
                <Route path='/store' element={<StorePage cart={cart} />} ></Route>
                <Route path='/react-project-7' element={<Navigate to="/" replace={true} />}></Route>
            </Routes>
        </div>
    )
}

export default Content