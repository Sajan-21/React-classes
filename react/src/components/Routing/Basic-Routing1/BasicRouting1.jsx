import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home1 from "./Home1";
import About1 from "./About1";
import Nav from "./Nav";

function BasicRouting1() {
    return(
        <>
        <Router>
        <Routes>
            <Route path={"/"} exact element={<Nav />}></Route>
            <Route path={"/home"} exact element={<Home1 />}></Route>
            <Route path={"/about"} exact element={<About1 />}></Route>
        </Routes>
        </Router>
        
        </>
    )
}

export default BasicRouting1;