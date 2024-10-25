import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';

function BasicRouting() {
    return(
        <>
        <Router>
        <nav className="bg-dark p-3">
            <ul className="d-flex justify-content-center align-items-center gap-5">
                <li><Link to={'/home'} className="text-light text-decoration-none">Home</Link></li>
                <li><Link to={'/about'} className="text-light text-decoration-none">About</Link></li>
            </ul>
        </nav>
        <section>
        <Routes>
            <Route path={"/home"} exact element={<Home />}></Route>
            <Route path={"/about"} exact element={<About />}></Route>
        </Routes>
        </section>
        </Router>
        
        </>
    )
}

export default BasicRouting;