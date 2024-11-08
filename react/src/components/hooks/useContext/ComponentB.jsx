import { useContext } from "react";
import { MyContext } from "./UseContextApp";

function ComponentB() {

    const contextVlue = useContext(MyContext);

    return(
        <>
        <h1>Context value from component B : {contextVlue}</h1>
        </>
    )
}

export default ComponentB;