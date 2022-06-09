import React from "react";
import HomePage from "./HomePage";
import {Route, Routes} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Searched from "./Searched";

function Pages() {
    return (
        <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Page1" element={<Page1 />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/searched/:search" element={<Searched />} />
        </Routes>

    )
}

export default Pages;