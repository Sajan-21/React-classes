import { createContext } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const MyContext = createContext('default');

function UseContextApp() {

    return(
        <>
        <MyContext.Provider value="Hello from UseContextApp">;
        <ComponentA />
        <ComponentB />
        </MyContext.Provider>
        </>
    )
}

export {MyContext};
export default UseContextApp;