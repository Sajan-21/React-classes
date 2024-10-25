import React from "react";
import { Link, Router } from "react-router-dom";

function Nav() {
    return(
        <>
        <nav className="bg-dark p-3">
            <ul className="d-flex justify-content-center align-items-center gap-5">
                <li><Link to={'/home'} className="text-light text-decoration-none">Home</Link></li>
                <li><Link to={'/about'} className="text-light text-decoration-none">About</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Nav;