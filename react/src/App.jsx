import React from "react";
import Greeting from "./components/Greeting";
import Details from "./components/Details";

function App() {
  return (
    <>
    <Greeting name={"john"}/>
    <Details age={20}/>
    </>
  )
}

export default App
