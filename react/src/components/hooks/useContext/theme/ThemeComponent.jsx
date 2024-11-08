import { useContext } from "react";
import { ThemeContext } from "./ThemeApp";

function ThemeComponent() {

    const {theme} = useContext(ThemeContext);

    return(
        <>
        <h1 style={{backgroundColor : theme}}>Themed Component</h1>
        </>
    )
}

export default ThemeComponent;