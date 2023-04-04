import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import StorePage from "./StorePage";

const Content = () => {
    return (
        <div id="content">
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/store' element={<StorePage />}></Route>
            </Routes>
        </div>
    )
}

export default Content