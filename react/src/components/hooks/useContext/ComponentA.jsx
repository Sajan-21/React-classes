import { useContext } from "react";
import { MyContext } from "./UseContextApp";

function ComponentA() {

    const contextVlue = useContext(MyContext);

    return(
        <>
        <h1>Context value from component A : {contextVlue}</h1>
        </>
    )
}

export default ComponentA;