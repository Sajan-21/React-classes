import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

function Home1() {
    return(
        <>
        <Nav />
        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
        <h1 className="">Home1 Component...</h1>
        </div>
        </>
    )
}
export default Home1;