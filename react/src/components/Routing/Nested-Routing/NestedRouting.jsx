import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Dashboard from "./Dashboard";

function NestedRouting() {
    return(
        <>
        <Router>
        <Routes>
            <Route path={"/"} exact element={<Nav />} />
            <Route path={"/home"} exact element={<Home />} />
            <Route path={"/about"} exact element={<About />} />
            <Route path={'/dashboard/*'} exact element={<Dashboard />} />
        </Routes>
        </Router>
        </>
    )
}

export default NestedRouting;