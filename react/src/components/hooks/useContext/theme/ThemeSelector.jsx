import { useContext } from "react";
import { ThemeContext } from "./ThemeApp";

function ThemeSelector() {

    const {setTheme} = useContext(ThemeContext);

    return(
        <>
        <button onClick={() => setTheme('red')}>red</button>
        <button onClick={() => setTheme('blue')}>Blue</button>
        </>
    )
}

export default ThemeSelector;